import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  const { caseStudy } = project;

  if (!caseStudy) {
    return (
      <article className="page narrow">
        <Link className="back-link" to="/projects">
          Tilbage til projekter
        </Link>

        <img className="detail-image" src={project.image} alt="" />
        <p className="eyebrow">{project.year}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.description}</p>

        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="actions">
            {project.links.map((link) => (
              <a
                className="button secondary"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </article>
    );
  }

  return (
    <article className="page">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>

      <div className="case-header">
        <div className="case-header-text">
          <p className="eyebrow">UX/UI Case study</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>

          {caseStudy.facts && (
            <dl className="case-facts">
              {caseStudy.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {caseStudy.heroImage && (
          <img
            className="case-header-image"
            src={caseStudy.heroImage}
            alt={project.title}
          />
        )}
      </div>

      <section className="case-split">
        <h2 className="case-split-label">Min rolle</h2>
        <p className="case-split-text">{caseStudy.role}</p>
      </section>

      <section className="case-split">
        <h2 className="case-split-label">Problemet</h2>
        <p className="case-split-text">{caseStudy.problem}</p>
      </section>

      <section className="case-split">
        <h2 className="case-split-label">Missionen</h2>
        <p className="case-split-text case-mission">{caseStudy.mission}</p>
      </section>

      <section className="process-overview">
        <p className="eyebrow">Designproces</p>
        <div className="process-overview-grid">
          {caseStudy.process.map((step) => (
            <div className="process-overview-card" key={step.phase}>
              <span className="process-ring" aria-hidden="true" />
              <h3>{step.phase}</h3>
              {step.tags && (
                <ul>
                  {step.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {caseStudy.process.map((step, index) => (
        <section className="phase-section" key={step.phase}>
          <p className="phase-number">
            {String(index + 1).padStart(2, "0")}
            <span> /{String(caseStudy.process.length).padStart(2, "0")}</span>
          </p>
          <h2>{step.phase.toUpperCase()}</h2>
          <p className="case-text">{step.text}</p>
          {step.image && <img className="phase-image" src={step.image} alt="" />}
        </section>
      ))}

      {caseStudy.gallery && (
        <section className="case-gallery-section">
          <p className="eyebrow">Eksempler på øvrigt materiale</p>
          <div className="case-gallery">
            {caseStudy.gallery.map((item) => (
              <img src={item.src} alt={item.alt} key={item.src} />
            ))}
          </div>
        </section>
      )}

      <section className="case-split case-outro">
        <h2 className="case-split-label">Hvad jeg lærte</h2>
        <ul className="learnings-list">
          {caseStudy.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </section>

      {project.links.length > 0 && (
        <div className="actions">
          {project.links.map((link) => (
            <a
              className="button secondary"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default ProjectPage;
