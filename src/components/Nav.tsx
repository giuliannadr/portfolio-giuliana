import { CV, ui } from "../content";
import { useLang } from "../lang";

const LINKS = [
  { id: "proyectos", label: ui.nav.projects },
  { id: "experiencia", label: ui.nav.experience },
  { id: "stack", label: ui.nav.stack },
  { id: "contacto", label: ui.nav.contact },
];

export const Nav = () => {
  const { lang, toggle, t } = useLang();

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label={lang === "es" ? "Principal" : "Main"}>
        <a href="#inicio" className="nav-name">Giuliana Di Rocco</a>
        <ul className="nav-links">
          {LINKS.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{t(link.label)}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button type="button" className="nav-lang" onClick={toggle} aria-label={t(ui.nav.switchTo)}>
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a className="nav-cv" href={t(CV)} download>
            {t(ui.nav.cv)}
          </a>
        </div>
      </nav>
    </header>
  );
};
