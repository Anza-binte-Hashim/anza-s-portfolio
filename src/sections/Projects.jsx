import ProjectCard from "../projects/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">
            Portfolio
          </span>

          <h2 className="section-title">
            Featured Projects
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
        

      </div>
    </section>
  );
}