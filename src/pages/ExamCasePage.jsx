import { Link } from "react-router";
import examCases from "../data/examCases";
import "./ExamCasePage.css";

function ExamCasePage({ slug }) {
  const examCase = examCases.find((item) => item.slug === slug);

  if (!examCase) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Casen blev ikke fundet</h1>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  const { walkthrough, result, reflection, business } = examCase;
  let sectionNumber = 0;
  const nextNumber = () => String(++sectionNumber).padStart(2, "0");

  return (
    <article className="page exam-case">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>

      <header className="exam-header">
        <div className="exam-header-text">
          <p className="eyebrow">{examCase.eyebrow}</p>
          <h1>{examCase.title}</h1>
          <p className="lead">{examCase.lead}</p>

          <dl className="case-facts">
            {examCase.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="exam-contribution">
            <p className="exam-label">Mit bidrag</p>
            <p>{examCase.contribution}</p>
          </div>

          <div className="actions">
            {examCase.links.map((link) => (
              <a
                className="button"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={examCase.heroWide ? "exam-hero-wide" : "exam-phone"}>
          <img src={examCase.heroImage} alt={examCase.heroAlt} />
        </div>
      </header>

      {examCase.sections.map((section) => (
        <section className="exam-section" key={section.id}>
          <p className="exam-number">{nextNumber()}</p>
          <h2>{section.label}</h2>

          {section.stats && (
            <dl className="exam-stats">
              {section.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className={section.sideImage ? "exam-split" : undefined}>
            <div className="exam-text">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {section.sideImage && (
              <figure className="exam-side-figure">
                <img
                  className="exam-image"
                  src={section.sideImage.src}
                  alt={section.sideImage.alt}
                />
                <figcaption className="exam-note">{section.sideImage.caption}</figcaption>
              </figure>
            )}
          </div>

          {section.choices && (
            <ul className="exam-choices">
              {section.choices.map((choice) => (
                <li key={choice.title}>
                  <strong>{choice.title}</strong> {choice.text}
                </li>
              ))}
            </ul>
          )}

          {section.dataModel && (
            <figure className="exam-datamodel">
              <h3>{section.dataModel.title}</h3>
              {[
                { label: "Før", tables: section.dataModel.before, note: section.dataModel.beforeNote },
                { label: "Efter", tables: section.dataModel.after, note: section.dataModel.afterNote, linked: true },
              ].map((row) => (
                <div className="exam-datamodel-row" key={row.label}>
                  <span className="exam-pair-label">{row.label}</span>
                  <div className="exam-datamodel-tables">
                    {row.tables.map((table, index) => (
                      <div className="exam-datamodel-group" key={table.name}>
                        {row.linked && index > 0 && (
                          <span className="exam-datamodel-link" aria-hidden="true">
                            1 → mange
                          </span>
                        )}
                        <table className="exam-db-table">
                          <thead>
                            <tr>
                              <th>{table.name}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {table.fields.map((field) => (
                              <tr
                                key={field.name}
                                className={field.key ? "is-key" : field.repeated ? "is-repeated" : undefined}
                              >
                                <td>
                                  {field.name}
                                  {field.key && <span className="exam-db-tag">FK</span>}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                  <p className="exam-note">{row.note}</p>
                </div>
              ))}
            </figure>
          )}

          {section.code && (
            <figure className="exam-code">
              <h3>{section.code.title}</h3>
              <div className="exam-code-pair">
                {[section.code.before, section.code.after].map((block) => (
                  <div key={block.label}>
                    <span className="exam-pair-label">{block.label}</span>
                    <pre>
                      <code>{block.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </figure>
          )}

          {section.image && (
            <figure
              className={`exam-figure${section.image.small ? " exam-figure-small" : ""}`}
            >
              <img
                className="exam-image"
                src={section.image.src}
                alt={section.image.alt}
              />
              {section.image.caption && (
                <figcaption className="exam-note">{section.image.caption}</figcaption>
              )}
            </figure>
          )}

          {section.gallery && (
            <figure className="exam-gallery">
              <div className="exam-gallery-images">
                {section.gallery.images.map((image) => (
                  <img src={image.src} alt={image.alt} key={image.src} />
                ))}
              </div>
              <figcaption className="exam-note">{section.gallery.note}</figcaption>
            </figure>
          )}
        </section>
      ))}

      {walkthrough && (
        <section className="exam-section">
          <p className="exam-number">{nextNumber()}</p>
          <h2>{walkthrough.label}</h2>
          <div className="exam-text">
            <p>{walkthrough.intro}</p>
          </div>

          {walkthrough.flows.map((flow) => (
            <div className="exam-flow" key={flow.title}>
              <h3>{flow.title}</h3>
              <ol className="exam-screens">
                {flow.screens.map((screen) => (
                  <li key={screen.src}>
                    <img src={screen.src} alt={`${flow.title}: ${screen.caption}`} />
                    <span>{screen.caption}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}

          <div className={`exam-embed${walkthrough.embedFit ? " exam-embed-fit" : ""}`}>
            <iframe
              src={walkthrough.embed}
              title={`${examCase.title}: klikbar Figma-prototype`}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>
      )}

      <section className="exam-section">
        <p className="exam-number">{nextNumber()}</p>
        <h2>{result.label}</h2>
        <div className="exam-text">
          {result.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="exam-table-wrap">
          <table className="exam-table">
            <thead>
              <tr>
                {result.comparison.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.comparison.rows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {result.bars && (
          <figure className="exam-bars">
            <figcaption className="exam-bars-title">{result.bars.title}</figcaption>
            <div
              role="img"
              aria-label={result.bars.items.map((item) => `${item.label}: ${item.display}`).join(", ")}
            >
              {result.bars.items.map((item, index) => {
                const max = Math.max(...result.bars.items.map((entry) => entry.value));
                return (
                  <div className="exam-bar-row" key={item.label} title={`${item.label}: ${item.display}`}>
                    <span className="exam-bar-label">{item.label}</span>
                    <div className="exam-bar-track">
                      <div
                        className={`exam-bar${index === 0 ? " is-before" : ""}`}
                        style={{ width: `calc((100% - 5rem) * ${item.value / max})` }}
                      />
                      <span className="exam-bar-value">{item.display}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="exam-note">{result.bars.note}</p>
          </figure>
        )}

        {result.pairs && (
          <>
            <div className="exam-text">
              <p>{result.pairsIntro}</p>
            </div>
            <div className="exam-pairs">
              {result.pairs.map((pair) => (
                <figure className="exam-pair" key={pair.caption}>
                  <div className="exam-pair-images">
                    <div>
                      <span className="exam-pair-label">Før</span>
                      <img src={pair.before.src} alt={pair.before.alt} />
                    </div>
                    <div>
                      <span className="exam-pair-label">Efter</span>
                      <img src={pair.after.src} alt={pair.after.alt} />
                    </div>
                  </div>
                  <figcaption>{pair.caption}</figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        <p className="exam-note">{result.after}</p>
      </section>

      <section className="exam-section">
        <p className="exam-number">{nextNumber()}</p>
        <h2>{reflection.label}</h2>
        <div className="exam-text">
          {reflection.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="exam-section">
        <p className="exam-number">{nextNumber()}</p>
        <h2>{business.label}</h2>
        <ul className="exam-value">
          {business.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="exam-note">{business.basis}</p>
      </section>

      <section className="exam-section exam-outro">
        <h2>Links og kilder</h2>
        <div className="actions">
          {examCase.links.map((link) => (
            <a
              className="button"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
        <ul className="exam-sources">
          {examCase.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default ExamCasePage;
