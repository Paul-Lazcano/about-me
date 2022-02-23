import { BiAdjust } from 'react-icons/bi';
import "./ToggleThemeButton.css";
export const ToggleThemeButton = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode((prevState) => !prevState)}
      className={`toggle-button ${darkMode && 'toggle-button--dark-mode'}`}
    >
      <BiAdjust/>
    </button>
  );
};
