import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { CV, EMAIL, GITHUB, LINKEDIN, WHATSAPP, ui } from "../content";
import { useLang } from "../lang";

export const Contact = () => {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin permiso de portapapeles: el email sigue visible y clickeable.
    }
  };

  return (
    <footer id="contacto" className="contact">
      <div className="container">
        <h2 className="contact-title">{t(ui.contact.title)}</h2>
        <p className="contact-body">{t(ui.contact.body)}</p>

        <div className="contact-email">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button type="button" className="icon-btn" onClick={copy} aria-label={t(ui.contact.copy)}>
            {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
          </button>
          <span className="sr-only" role="status">{copied ? t(ui.contact.copied) : ""}</span>
        </div>

        <ul className="contact-links">
          <li>
            <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              className="btn"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t(ui.contact.whatsappMessage))}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp
            </a>
          </li>
          <li>
            <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
          </li>
          <li>
            <a className="btn" href={t(CV)} download>
              <Download size={16} aria-hidden="true" /> {t(ui.hero.cv)}
            </a>
          </li>
        </ul>

        <p className="contact-foot">© 2026 Giuliana Di Rocco</p>
      </div>
    </footer>
  );
};
