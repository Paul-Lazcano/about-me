import "./TextContainer.css";
export const TextContainer = ({ children, size, type, darkMode }) => {
  return (
    <article
      className={`text-container text-container--${size} text-container--${type} ${darkMode && 'text-container--dark-mode'}`}
    >
      {children}
    </article>
  );
};
