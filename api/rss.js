const SOURCES = [
  { key:'inserm',    url:'https://www.inserm.fr/actualite/feed/',             label:'Inserm',             color:'#0369a1' },
  { key:'arthritis', url:'https://www.arthritis.fr/feed/',                    label:'Fondation Arthritis', color:'#dc2626' },
  { key:'aflar',     url:'https://www.aflar.org/feed/',                        label:'AFLAR',              color:'#7c3aed' },
  { key:'futura',    url:'https://www.futura-sciences.com/sante/rss/',         label:'Futura Santé',       color:'#059669' },
  { key:'sfr',       url:'https://public.larhumatologie.fr/feed/',            label:'SFR Patients',       color:'#2dc4b5' },
  { key:'passeport', url:'https://www.passeportsante.net/fr/rss/rss.xml',     label:'PasseportSanté',     color:'#d97706' },
];

const RHUMA = ['arthrite','arthrose','rhumatisme','rhumatolog','polyarthrite','spondylarthrite','lupus','ostéoporose','fibromyalgie','goutte','biothérapie','méthotrexate','anti-tnf','jak','inflammatoire','articulaire','douleur','osteoporosis','arthritis','rheumatoid','spondyloarthritis','fibromyalgia'];
const SPECIALIZED = new Set(['arthritis','aflar','sfr']);

function isRhuma(title, desc) {
  const l = (title + ' ' + desc).toLowerCase();
  return RHUMA.some(k => l.includes(k));
}

function stripHtml(s) {
  return (s || '').replace(/<[^>]+>/g, '').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

function makeSummary(raw, max = 200) {
  const t = stripHtml(raw);
  if (!t) return '';
  const s = t.split(/[.!?]/).find(s => s.trim().length > 30) || t;
  const r = s.trim();
  return r.length > max ? r.slice(0, max - 1) + '…' : r;
}

function parseISO(str) {
  try { const d = new Date(str); return isNaN(d) ? '' : d.toISOString(); } catch { return ''; }
}

function getBlock(xml, tag) {
  // CDATA
  const cdata = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[[\\s\\S]*?\\]\\]><\/${tag}>`, 'i'));
  if (cdata) return cdata[0].replace(new RegExp(`^<${tag}[^>]*><!\\[CDATA\\[`, 'i'), '').replace(/\]\]><\/[^>]+>$/, '').trim();
  // Normal
  const norm = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`, 'i'));
  return norm ? norm[1].trim() : '';
}

function getAttr(xml, tag, attr) {
  const m = xml.match(new RegExp(`<${tag}[^>]+${attr}=["']([^"']+)["']`, 'i'));
  return m ? m[1] : '';
}

function parseItems(xml, src) {
  const items = [];
  const blocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
  
  for (const b of blocks) {
    const block = b[1];
    const title = stripHtml(getBlock(block, 'title'));
    if (!title) continue;

    const desc = getBlock(block, 'description') || getBlock(block, 'content:encoded') || '';
    if (!SPECIALIZED.has(src.key) && !isRhuma(title, stripHtml(desc))) continue;

    // Image: enclosure > media:content > media:thumbnail > img in desc
    let image = getAttr(block, 'enclosure', 'url')
             || getAttr(block, 'media:content', 'url')
             || getAttr(block, 'media:thumbnail', 'url');
    if (!image || !/\.(jpe?g|png|webp|gif)/i.test(image)) {
      const im = desc.match(/<img[^>]+src=["']([^"']+\.(jpe?g|png|webp|gif))[^"']*["']/i);
      image = im ? im[1] : null;
    }
    if (image && !/^https?:\/\//i.test(image)) image = null;

    const link = getBlock(block, 'link') || getBlock(block, 'guid') || '';
    const pubDate = parseISO(getBlock(block, 'pubDate') || getBlock(block, 'dc:date'));

    items.push({
      sourceKey: src.key,
      sourceLabel: src.label,
      sourceColor: src.color,
      title,
      link,
      pubDate,
      summary: makeSummary(desc),
      image: image || null,
    });

    if (items.length >= 10) break;
  }
  return items;
}

async function fetchSource(src) {
  const https = require('https');
  const http = require('http');
  
  return new Promise((resolve, reject) => {
    const protocol = src.url.startsWith('https') ? https : http;
    const options = {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MonRhumato/1.0; +https://monrhumato.fr)' },
      timeout: 10000,
    };
    
    const req = protocol.get(src.url, options, (res) => {
      // Suivre les redirections
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectSrc = { ...src, url: res.headers.location };
        fetchSource(redirectSrc).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve(parseItems(data, src)));
      res.on('error', reject);
    });
    
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const sourceKey = req.query && req.query.source;
  const sources = sourceKey ? SOURCES.filter(s => s.key === sourceKey) : SOURCES;

  const results = await Promise.allSettled(sources.map(fetchSource));

  const articles = [];
  const failed = [];

  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      articles.push(...r.value);
    } else {
      console.error(`[RSS] ${sources[i].key} failed:`, r.reason?.message);
      failed.push(sources[i].key);
    }
  });

  articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  res.status(200).json({ articles, failed, total: articles.length });
};

// Réutilisés par scripts/genere-mission.js (génération de mission.txt hors Vercel)
module.exports.SOURCES = SOURCES;
module.exports.fetchSource = fetchSource;
