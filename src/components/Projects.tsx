import { ArrowUpRight, Github } from "lucide-react";
import { clientSites, featured, more, ui, type ProjectLink } from "../content";
import { useLang } from "../lang";

const isRepo = (href: string) => href.startsWith("https://github.com/");

const Links = ({ links, primary = false }: { links: ProjectLink[]; primary?: boolean }) => {
  const { t } = useLang();
  return (
    <ul className="project-links">
      {links.map((link, i) => (
        <li key={link.href}>
          <a
            className={primary && i === 0 ? "btn btn--solid btn--small" : "btn btn--small"}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {isRepo(link.href) ? <Github size={15} aria-hidden="true" /> : null}
            {t(link.label)}
            {!isRepo(link.href) ? <ArrowUpRight size={15} aria-hidden="true" /> : null}
            <span className="sr-only"> {t(ui.projects.newTab)}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export const Projects = () => {
  const { t } = useLang();

  return (
    <section id="proyectos" className="section container" aria-labelledby="proyectos-title">
      <div className="section-head">
        <h2 id="proyectos-title">{t(ui.projects.title)}</h2>
        <p>{t(ui.projects.intro)}</p>
      </div>

      <div className="features">
        {featured.map(p => (
          <article key={p.id} className="feature" aria-labelledby={`${p.id}-title`}>
            <div className="feature-media frame">
              <img
                src={p.image.src}
                alt={p.name}
                width={p.image.w}
                height={p.image.h}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: p.image.position ?? "center" }}
              />
            </div>
            <div className="feature-text">
              <h3 id={`${p.id}-title`} className="feature-name">{p.name}</h3>
              <p className="context">{t(p.context)}</p>
              <p className="feature-summary">{t(p.summary)}</p>
              <h4 className="feature-subhead">{t(ui.projects.solved)}</h4>
              <ul className="feature-points">
                {p.points.map(point => (
                  <li key={point.es}>{t(point)}</li>
                ))}
              </ul>
              <p className="stack-line">{p.stack.join(", ")}</p>
              <Links links={p.links} primary />
            </div>
          </article>
        ))}
      </div>

      <h3 className="subsection-title">{t(ui.projects.moreTitle)}</h3>
      <div className="more">
        {more.map(p => (
          <article key={p.id} className="more-item" aria-labelledby={`${p.id}-title`}>
            <div className="frame more-media">
              <img
                src={p.image.src}
                alt={p.name}
                width={p.image.w}
                height={p.image.h}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: p.image.position ?? "center" }}
              />
            </div>
            <h4 id={`${p.id}-title`} className="more-name">{p.name}</h4>
            <p className="context">{t(p.context)}</p>
            <p className="more-summary">{t(p.summary)}</p>
            <p className="stack-line">{p.stack.join(", ")}</p>
            <Links links={p.links} />
          </article>
        ))}
      </div>

      <div className="sites-head">
        <h3 className="subsection-title">{t(ui.projects.sitesTitle)}</h3>
        <p>{t(ui.projects.sitesIntro)}</p>
      </div>
      <ul className="sites">
        {clientSites.map(s => (
          <li key={s.name}>
            <a href={s.href} target="_blank" rel="noreferrer" className="site-row">
              <span className="site-name">{s.name}</span>
              <span className="site-summary">{t(s.summary)}</span>
              <span className="site-domain">
                {new URL(s.href).hostname.replace(/^www\./, "")}
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
              <span className="sr-only"> {t(ui.projects.newTab)}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
