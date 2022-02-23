import "./Title.css";
export const Title = ({ content, type, darkMode }) => {
  return (
    <h1 className={`title title--${type} ${darkMode && "title--dark-mode"}`}>
      {content}
    </h1>
  );
};
