import { Link } from "react-router";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <div className="page">
      <section className="section intro">
        <p className="eyebrow">Projekter</p>
        <h1>Mine projekter</h1>
        <p>Herunder kan du se mine projekter</p>
      </section>

      <ul className="project-list" aria-label="Projektliste">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link className="project-row has-thumb" to={`/projects/${project.slug}`}>
              <div className="project-row-text">
                <div className="project-row-heading">
                  <h2>{project.title}</h2>
                  <span className="project-row-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
                <p className="project-row-summary">{project.summary}</p>
                <p className="project-row-meta">
                  {[project.category, project.market, project.industry]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <img
                className="project-row-thumb"
                src={project.cardImage ?? project.caseStudy?.heroImage ?? project.image}
                alt=""
                style={project.cardPosition ? { objectPosition: project.cardPosition } : undefined}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
