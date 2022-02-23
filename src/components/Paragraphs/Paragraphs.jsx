import "./Paragraphs.css";
export const Paragraphs = ({ content, darkMode }) => {
  return (
    <>
      {content && <p className={`text ${darkMode && "text--dark-mode"}`}>{content}</p>}
    </>
  )
};
