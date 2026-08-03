# scripts/envoi-email.py — MonRhumato.fr
# Envoie la synthèse hebdomadaire la plus récente (rapports/index.json) à GMAIL_USER
# via SMTP Gmail (même mot de passe d'application que la collecte).

import json
import os
import pathlib
import smtplib
from email.message import EmailMessage

USER = os.environ["GMAIL_USER"]
PASSWORD = os.environ["GMAIL_APP_PASSWORD"]

index = json.loads(pathlib.Path("rapports/index.json").read_text(encoding="utf-8"))
if not index:
    raise SystemExit("Aucune synthèse dans rapports/index.json — rien à envoyer.")

latest = index[0]
report = pathlib.Path(latest["file"]).read_text(encoding="utf-8")

msg = EmailMessage()
msg["From"] = USER
msg["To"] = USER
msg["Subject"] = f"🔎 Veille MonRhumato — synthèse du {latest['date']}"
msg.set_content(report)

with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    smtp.login(USER, PASSWORD)
    smtp.send_message(msg)

print(f"Synthèse {latest['date']} envoyée à {USER}")
