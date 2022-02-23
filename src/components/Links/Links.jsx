import "./Links.css";
export const Links = ({ content, darkMode }) => {
  const linksToArray = Object.entries(content);
  return (
    <div className='links-container'>
      {linksToArray.map((link) => (
        <a
          key={link}
          href={link[1].link}
          className={`links ${darkMode && "links--dark-mode"}`}
        >
          {link[1].title}
        </a>
      ))}
    </div>
  );
};
