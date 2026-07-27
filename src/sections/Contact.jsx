export default function Contact() {
  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            Contact
          </span>

          <h2 className="section-title">
            Let's Work Together
          </h2>

        </div>

        <div className="contact-card">

          <p>
            I'm currently looking for opportunities as a
            Full Stack Web Developer.
          </p>

          <p>
            Whether you have a project, an internship,
            or a full-time opportunity, I'd love to hear from you.
          </p>

          <div className="contact-links">

            <a href="mailto:anza.hashim@gmail.com">
                📧 Email
            </a>

            <a
              href="https://github.com/Anza-binte-Hashim"
              target="_blank"
              rel="noreferrer"
            >
                💻 GitHub
            </a>

            {/* <a href="#">
                💼 LinkedIn
            </a> */}

          </div>

        </div>

      </div>
    </section>
  );
}