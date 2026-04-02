export const config = { runtime: 'edge' };

const SOURCES = [
  { key:'inserm',    url:'https://www.inserm.fr/actualite/feed/',             label:'Inserm',             color:'#0369a1' },
  { key:'arthritis', url:'https://www.arthritis.fr/feed/',                    label:'Fondation Arthritis', color:'#dc2626' },
  { key:'aflar',     url:'https://www.aflar.org/feed/',                        label:'AFLAR',              color:'#7c3aed' },
  { key:'futura',    url:'https://www.futura-sciences.com/sante/rss/',         label:'Futura Santé',       color:'#059669' },
  { key:'sfr',       url:'https://public.larhumatologie.fr/feed/',            label:'SFR Patients',       color:'#2dc4b5' },
  { key:'passeport', url:'https://www.passeportsante.net/fr/rss/rss.xml',     label:'PasseportSanté',     color:'#d97706' },
];

const RHUMA = ['arthrite','arthrose','rhumatisme','rhumatolog','polyarthrite','spondylarthrite','lupus','ostéoporose','fibromyalgie','goutte','biothérapie','méthotrexate','anti-tnf','jak','inflammatoire','articulaire','douleur','osteoporosis','arthritis','rheumatoid','spondyloarthritis','fibromyalgia'];

const specialized = new Set(['arthritis','aflar','sfr']);

function isRhuma(title, desc) {
  const l = (title+' '+desc).toLowerCase();
  return RHUMA.some(k => l.includes(k));
}

function stripHtml(s) {
  return (s||'').replace(/<[^>]+>/g,'').replace(/&[a-z#0-9]+;/gi,' ').replace(/\s+/g,' ').trim();
}

function makeSummary(raw, max=180) {
  const t = stripHtml(raw);
  if(!t) return '';
  const s = t.split(/[.!?]/).find(s=>s.trim().length>30)||t;
  const r = s.trim();
  return r.length>max ? r.slice(0,max-1)+'…' : r;
}

function parseISO(str) {
  try { const d=new Date(str); return isNaN(d)?'':d.toISOString(); } catch { return ''; }
}

function getBlock(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[[\\s\\S]*?\\]\\]></${tag}>|<${tag}[^>]*>[\\s\\S]*?</${tag}>`, 'i'));
  if(!m) return '';
  return m[0].replace(new RegExp(`^<${tag}[^>]*>`, 'i'),'').replace(new RegExp(`</${tag}>$`,'i'),'').replace(/^<!\[CDATA\[/,'').replace(/\]\]>$/,'').trim();
}

function getAttrBlock(xml, tag, attr) {
  const m = xml.match(new RegExp(`<${tag}[^>]+${attr}=["']([^"']+)["']`,'i'));
  return m?m[1]:'';
}

function parseItems(xml, src) {
  const items = [];
  const blocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
  for(const b of blocks) {
    const block = b[1];
    const title = stripHtml(getBlock(block,'title'));
    if(!title) continue;
    const desc = getBlock(block,'description') || getBlock(block,'content:encoded') || '';
    if(!specialized.has(src.key) && !isRhuma(title, stripHtml(desc))) continue;

    let image = getAttrBlock(block,'enclosure','url') || getAttrBlock(block,'media:content','url') || getAttrBlock(block,'media:thumbnail','url');
    if(!image || !/\.(jpe?g|png|webp|gif)/i.test(image)) {
      const im = desc.match(/<img[^>]+src=["']([^"']+\.(jpe?g|png|webp))["']/i);
      image = im?im[1]:null;
    }

    const link = getBlock(block,'link') || getBlock(block,'guid') || '';
    const pubDate = parseISO(getBlock(block,'pubDate')||getBlock(block,'dc:date'));

    items.push({ sourceKey:src.key, sourceLabel:src.label, sourceColor:src.color, title, link, pubDate, summary:makeSummary(desc), image:image||null });
    if(items.length>=10) break;
  }
  return items;
}

async function fetchSource(src) {
  const r = await fetch(src.url, {
    headers:{'User-Agent':'Mozilla/5.0 (compatible; MonRhumato/1.0; +https://monrhumato.fr)'},
    signal: AbortSignal.timeout(10000),
  });
  if(!r.ok) throw new Error(`HTTP ${r.status}`);
  const xml = await r.text();
  return parseItems(xml, src);
}

export default async function handler(req) {
  const h = {
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,OPTIONS',
    'Content-Type':'application/json',
    'Cache-Control':'s-maxage=900,stale-while-revalidate=1800',
  };
  if(req.method==='OPTIONS') return new Response('',{status:200,headers:h});

  const url = new URL(req.url);
  const srcKey = url.searchParams.get('source');
  const sources = srcKey ? SOURCES.filter(s=>s.key===srcKey) : SOURCES;

  const results = await Promise.allSettled(sources.map(fetchSource));
  const articles=[], failed=[];
  results.forEach((r,i)=>{
    if(r.status==='fulfilled') articles.push(...r.value);
    else failed.push(sources[i].key);
  });
  articles.sort((a,b)=>new Date(b.pubDate)-new Date(a.pubDate));

  return new Response(JSON.stringify({articles,failed,total:articles.length}),{status:200,headers:h});
}
