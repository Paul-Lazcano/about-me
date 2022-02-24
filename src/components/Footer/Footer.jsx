import "./Footer.css";
export const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode && "footer-dark-mode"}`}>
      <div className="footer__block"></div>
      <ul className="footer__list">
        <li>
          <a
            className={`footer__link ${darkMode && "footer__link--dark-mode"}`}
            href="https://github.com/Paul-Lazcano"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className={`footer__link ${darkMode && "footer__link--dark-mode"}`}
            href="https://www.linkedin.com/in/paul-lazcano-4932211ba/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};
