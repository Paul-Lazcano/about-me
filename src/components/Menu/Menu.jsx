import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
export const Menu = ({ darkMode }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <section
        className={`menu-container ${darkMode && "menu-container--dark-mode"} ${
          menuActive && "menu-container--active"
        }`}
      >
        <ul className={`menu ${darkMode && "menu--dark-mode"}`}>
          <li
            onClick={() => setMenuActive((prevState) => !prevState)}
            className={`menu__list-item ${
              darkMode && "menu__list-item--dark-mode"
            }`}
          >
            <Link
              to="/"
              className={`menu__link ${darkMode && "menu__link--dark-mode"}`}
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => setMenuActive((prevState) => !prevState)}
            className={`menu__list-item ${
              darkMode && "menu__list-item--dark-mode"
            }`}
          >
            <Link
              to="/education"
              className={`menu__link ${darkMode && "menu__link--dark-mode"}`}
            >
              Education
            </Link>
          </li>
          <li
            onClick={() => setMenuActive((prevState) => !prevState)}
            className={`menu__list-item ${
              darkMode && "menu__list-item--dark-mode"
            }`}
          >
            <Link
              to="/objectives"
              className={`menu__link ${darkMode && "menu__link--dark-mode"}`}
            >
              Objectives
            </Link>
          </li>
          <li
            onClick={() => setMenuActive((prevState) => !prevState)}
            className={`menu__list-item ${
              darkMode && "menu__list-item--dark-mode"
            }`}
          >
            <Link
              to="/work-experience"
              className={`menu__link ${darkMode && "menu__link--dark-mode"}`}
            >
              Work Experience
            </Link>
          </li>
          <li
            onClick={() => setMenuActive((prevState) => !prevState)}
            className={`menu__list-item ${
              darkMode && "menu__list-item--dark-mode"
            }`}
          >
            <Link
              to="/contact-info"
              className={`menu__link ${darkMode && "menu__link--dark-mode"}`}
            >
              Contact Info
            </Link>
          </li>
        </ul>
        <button
          className={`menu-button ${darkMode && "menu-button--dark-mode"}`}
          onClick={() => setMenuActive((prevState) => !prevState)}
        >
          MENU
        </button>
      </section>
    </>
  );
};
