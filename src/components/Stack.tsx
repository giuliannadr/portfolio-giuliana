import { stackGroups, ui } from "../content";
import { useLang } from "../lang";

export const Stack = () => {
  const { t } = useLang();

  return (
    <section id="stack" className="section container" aria-labelledby="stack-title">
      <div className="section-head">
        <h2 id="stack-title">{t(ui.stack.title)}</h2>
        <p>{t(ui.stack.intro)}</p>
      </div>
      <dl className="stack-grid">
        {stackGroups.map(group => (
          <div key={group.title.es} className="stack-group">
            <dt>{t(group.title)}</dt>
            <dd>{t(group.items)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
