export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        <h3 className="primary">
          Anza<span className="dot">.</span>
        </h3>

        <p>
          Full Stack Web Developer
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} Anza Hashim.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}