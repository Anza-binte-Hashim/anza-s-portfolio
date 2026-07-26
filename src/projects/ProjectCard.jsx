import { useState } from "react";
import ProjectModal from "./ProjectModal";


export default function ProjectCard({ project }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <article className="project-card">

                <img src={project.image} alt={`${project.title} preview`} className="project-image" />

                <div className="project-content">

                    <span className="project-status">
                        {project.status}
                    </span>

                    <h3>{project.title}</h3>

                    <h4>{project.subtitle}</h4>

                    <p>{project.description}</p>

                    <div className="tech-stack">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="tech-pill" >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="project-buttons">
                        <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); setIsOpen(true); }} >
                            View Details
                        </button>
                    </div>

                </div>

            </article>

            <ProjectModal project={isOpen ? project : null} onClose={() => setIsOpen(false)} />
        </>
    );
}