import { jobs, studies, ui } from "../content";
import { useLang } from "../lang";

export const Experience = () => {
  const { t } = useLang();

  return (
    <section id="experiencia" className="section container" aria-labelledby="experiencia-title">
      <div className="section-head">
        <h2 id="experiencia-title">{t(ui.experience.title)}</h2>
      </div>

      <ol className="timeline">
        {jobs.map(job => (
          <li key={job.role.es + job.from.es} className="timeline-item">
            <p className="timeline-when">
              {t(job.from)} – {t(job.to)}
            </p>
            <div>
              <h3 className="timeline-role">{t(job.role)}</h3>
              <p className="context">{t(job.org)}</p>
              <p className="timeline-body">{t(job.body)}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="subsection-title">{t(ui.experience.education)}</h3>
      <ul className="timeline">
        {studies.map(s => (
          <li key={s.title.es} className="timeline-item">
            <p className="timeline-when">{t(s.when)}</p>
            <div>
              <h4 className="timeline-role">{t(s.title)}</h4>
              <p className="context">{s.org}</p>
              <p className="timeline-body">{t(s.note)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
