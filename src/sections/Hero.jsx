

import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <p className="hero-intro">
          Hi, I'm
        </p>

        <h1 className="hero-title">
            Anza <span className="primary">Hashim</span>
          </h1>

        <h2 className="hero-subtitle">
          Laravel & React Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive web applications using
          <span className="primary"> Laravel</span>,
          <span className="primary"> React</span>,
          <span className="primary"> PostgreSQL</span>, and
          <span className="primary"> PHP</span>.
          <br /><br />
          I enjoy writing clean, maintainable code and creating
          user-focused digital experiences.
        </p>

        <div className="hero-buttons">
          {/* <a href="#projects" className="btn btn-primary" >
            View Projects
          </a> */}
          <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer" >
            View CV
          </a>
          <a href="/resume.pdf" download className="btn btn-outline" >
           <FiDownload />
    <span>Download CV</span>
          </a>
        </div>

      </div>
    </section>
  );
}