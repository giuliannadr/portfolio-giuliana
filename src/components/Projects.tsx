import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Github, Plus, X } from "lucide-react";
import { clientSites, featured, more, ui, type Featured, type ProjectLink } from "../content";
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

// Los proyectos no destacados van en un carrusel compacto: imagen y título a la
// vista, y la descripción en un diálogo que se abre al tocar la tarjeta.
const MoreProjects = () => {
  const { t } = useLang();
  const track = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });
  const [openId, setOpenId] = useState<string | null>(null);
  const open = more.find(p => p.id === openId);

  const updateEdges = () => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    });
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const scrollable = !(edges.start && edges.end);

  return (
    <>
      <div className="more-head">
        <h3 className="subsection-title">{t(ui.projects.moreTitle)}</h3>
        {scrollable ? (
          <div className="more-arrows">
            <button
              type="button"
              className="round-btn"
              onClick={() => scrollByCard(-1)}
              disabled={edges.start}
              aria-label={t(ui.projects.prev)}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="round-btn"
              onClick={() => scrollByCard(1)}
              disabled={edges.end}
              aria-label={t(ui.projects.next)}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>

      <ul className="more-track" ref={track} onScroll={updateEdges}>
        {more.map(p => (
          <li key={p.id}>
            <button type="button" className="more-card" onClick={() => setOpenId(p.id)}>
              <span className="frame more-media">
                <img
                  src={p.image.src}
                  alt=""
                  width={p.image.w}
                  height={p.image.h}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: p.image.position ?? "center" }}
                />
              </span>
              <span className="more-name">{p.name}</span>
              <span className="more-context">{t(p.context)}</span>
              <span className="more-cta">
                {t(ui.projects.details)}
                <Plus size={14} aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="more-dialog"
        aria-labelledby="more-dialog-title"
        onClose={() => setOpenId(null)}
        onClick={e => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        {open ? (
          <div className="more-dialog-body">
            <button
              type="button"
              className="round-btn more-dialog-close"
              onClick={() => dialog.current?.close()}
              aria-label={t(ui.projects.close)}
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div className="frame more-dialog-media">
              <img
                src={open.image.src}
                alt={open.name}
                width={open.image.w}
                height={open.image.h}
                style={{ objectPosition: open.image.position ?? "center" }}
              />
            </div>
            <h4 id="more-dialog-title" className="more-dialog-name">{open.name}</h4>
            <p className="context">{t(open.context)}</p>
            <p className="more-summary">{t(open.summary)}</p>
            <p className="stack-line">{open.stack.join(", ")}</p>
            <Links links={open.links} />
          </div>
        ) : null}
      </dialog>
    </>
  );
};

// En mobile el detalle de cada destacado arranca plegado: el resumen se corta en
// pocas líneas y "Lo que resolví" y el stack aparecen al tocar "Ver más".
// En desktop el botón no se muestra y todo queda visible.
const Feature = ({ p }: { p: Featured }) => {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const detailsId = `${p.id}-details`;

  return (
    <article className="feature" aria-labelledby={`${p.id}-title`}>
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
      <div className={expanded ? "feature-text is-expanded" : "feature-text"}>
        <h3 id={`${p.id}-title`} className="feature-name">{p.name}</h3>
        <p className="context">{t(p.context)}</p>
        <p className="feature-summary">{t(p.summary)}</p>
        <div id={detailsId} className="feature-details">
          <h4 className="feature-subhead">{t(ui.projects.solved)}</h4>
          <ul className="feature-points">
            {p.points.map(point => (
              <li key={point.es}>{t(point)}</li>
            ))}
          </ul>
          <p className="stack-line">{p.stack.join(", ")}</p>
        </div>
        <button
          type="button"
          className="feature-toggle"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded(e => !e)}
        >
          {t(expanded ? ui.projects.showLess : ui.projects.showMore)}
          <ChevronDown size={16} aria-hidden="true" />
        </button>
        <Links links={p.links} primary />
      </div>
    </article>
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
          <Feature key={p.id} p={p} />
        ))}
      </div>

      <MoreProjects />

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
