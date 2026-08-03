# scripts/collecte-emails.py — MonRhumato.fr
# Récupère dans Gmail les rapports Deep Research envoyés par les tâches planifiées
# ChatGPT et Gemini, et les dépose dans rapports/inbox/ pour la synthèse Claude.
#
# Variables d'environnement :
#   GMAIL_USER          — adresse Gmail complète
#   GMAIL_APP_PASSWORD  — mot de passe d'application (https://myaccount.google.com/apppasswords)
#   GMAIL_QUERY         — requête Gmail (optionnelle) ; défaut : e-mails OpenAI/Google < 24 h

import email
import html
import imaplib
import os
import pathlib
import re
from email.header import decode_header, make_header

USER = os.environ["GMAIL_USER"]
PASSWORD = os.environ["GMAIL_APP_PASSWORD"]
QUERY = os.environ.get("GMAIL_QUERY", "newer_than:1d (from:openai.com OR from:google.com)")
OUT = pathlib.Path("rapports/inbox")
OUT.mkdir(parents=True, exist_ok=True)


def decode(value):
    return str(make_header(decode_header(value or "")))


def strip_html(raw):
    raw = re.sub(r"(?is)<(script|style).*?</\1>", "", raw)
    raw = re.sub(r"(?i)<br\s*/?>", "\n", raw)
    raw = re.sub(r"(?i)</(p|div|h[1-6]|li|tr)>", "\n", raw)
    raw = re.sub(r"<[^>]+>", "", raw)
    return html.unescape(re.sub(r"\n{3,}", "\n\n", raw)).strip()


def body_text(msg):
    plain, html_part = None, None
    for part in msg.walk():
        if part.get_content_maintype() == "multipart":
            continue
        payload = part.get_payload(decode=True)
        if payload is None:
            continue
        charset = part.get_content_charset() or "utf-8"
        text = payload.decode(charset, errors="replace")
        if part.get_content_type() == "text/plain" and plain is None:
            plain = text
        elif part.get_content_type() == "text/html" and html_part is None:
            html_part = text
    if plain and plain.strip():
        return plain.strip()
    if html_part:
        return strip_html(html_part)
    return ""


def main():
    box = imaplib.IMAP4_SSL("imap.gmail.com")
    box.login(USER, PASSWORD)
    box.select("INBOX", readonly=True)
    typ, data = box.uid("SEARCH", "X-GM-RAW", f'"{QUERY}"')
    if typ != "OK":
        raise SystemExit(f"Recherche IMAP échouée : {typ} {data}")
    uids = data[0].split()
    print(f"{len(uids)} e-mail(s) correspondant à : {QUERY}")

    for uid in uids:
        typ, msg_data = box.uid("FETCH", uid, "(RFC822)")
        if typ != "OK" or not msg_data or msg_data[0] is None:
            continue
        msg = email.message_from_bytes(msg_data[0][1])
        sender = decode(msg.get("From"))
        subject = decode(msg.get("Subject"))
        date = decode(msg.get("Date"))
        text = body_text(msg)
        if len(text) < 200:  # notifications vides ou accusés — ignorés
            print(f"  ignoré (trop court) : {subject}")
            continue
        path = OUT / f"{uid.decode()}-{re.sub(r'[^a-zA-Z0-9]+', '-', subject)[:60]}.md"
        path.write_text(
            f"# {subject}\n\n- **De :** {sender}\n- **Date :** {date}\n\n---\n\n{text}\n",
            encoding="utf-8",
        )
        print(f"  enregistré : {path.name} ({len(text)} caractères)")

    box.logout()


if __name__ == "__main__":
    main()
