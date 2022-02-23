import "./MainContent.css";
export const MainContent = ({ children, darkMode }) => {
  return (
    <section
      className={`main-content ${darkMode && "main-content--dark-mode"}`}
    >
      {children}
    </section>
  );
};
