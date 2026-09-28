import { Download } from "lucide-react";
import { CV, ui } from "../content";
import { useLang } from "../lang";

export const Hero = () => {
  const { t } = useLang();

  return (
    <section id="inicio" className="hero container">
      <h1 className="hero-name">
        <span className="hero-line">
          <span className="hero-word">Giuliana</span>
          <span className="hero-photo">
            <img src="/giuliprofile.webp" alt="" width={800} height={463} />
          </span>
        </span>{" "}
        <span className="hero-line">
          <span className="hero-word hero-word--late">Di Rocco</span>
        </span>
      </h1>

      <div className="hero-body">
        <p className="hero-role">{t(ui.hero.role)}</p>
        <p className="hero-lead">{t(ui.hero.lead)}</p>
        <div className="hero-actions">
          <a className="btn btn--solid" href="#proyectos">{t(ui.hero.projects)}</a>
          <a className="btn" href={t(CV)} download>
            <Download size={16} aria-hidden="true" />
            {t(ui.hero.cv)}
          </a>
        </div>
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          {t(ui.hero.status)}
        </p>
      </div>
    </section>
  );
};
