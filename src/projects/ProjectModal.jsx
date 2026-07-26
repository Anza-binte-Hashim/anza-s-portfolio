import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Disable page scrolling
    document.body.style.overflow = "hidden";

    // Close with Escape key
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="project-title" >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close project details" >
              ×
          </button>

        <img src={project.image} alt={`${project.title} preview`} className="modal-image" />

        <span className="project-status">
          {project.status}
        </span>

        <h2 id="project-title">
          {project.title}
        </h2>

        <h4>{project.subtitle}</h4>

        <p>{project.description}</p>

        {project.highlights?.length > 0 && (
                <>
                    <h3>Highlights</h3>

                    <ul className="highlight-list">
                        {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </>
            )}

        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

          <div className="project-buttons">
              {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" >
                      GitHub
                  </a>
              )}

              {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Live Demo
                  </a>
              )}

          </div>
      </div>
    </div>
  );
}