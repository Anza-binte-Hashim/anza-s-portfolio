export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">About Me</span>

          <h2 className="section-title">
            Building software with clarity,
            quality and purpose.
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-card">

            <h3>Who I Am</h3>

            <p>
              I'm a Full Stack Web Developer passionate about creating
              modern web applications using Laravel, React, PostgreSQL
              and PHP.
            </p>

            <p>
              I enjoy solving problems through clean architecture,
              reusable components and thoughtful user interfaces.
            </p>

            <p>
              Every project is an opportunity to learn something new,
              improve my development practices and build software that
              is reliable, maintainable and user-focused.
            </p>

          </div>

          <div className="about-card">

            <h3>What I Enjoy</h3>

            <ul>

              <li>✓ Laravel Development</li>

              <li>✓ React Applications</li>

              <li>✓ PostgreSQL Database Design</li>

              <li>✓ REST API Development</li>

              <li>✓ Interactive SVG Interfaces</li>

              <li>✓ Clean UI Design</li>

              <li>✓ Writing Maintainable Code</li>

              <li>✓ Continuous Learning</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}