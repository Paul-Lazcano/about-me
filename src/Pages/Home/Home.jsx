import { useContext } from "react";
import { usePersonalInfo } from "../../hooks/usePersonalInfo";
import { ThemeContext } from "../../context/DarkTheme";
import { TextContainer } from "../../components/TextContainer/TextContainer";
import { Title } from "../../components/Title/Title";
import { Paragraphs } from "../../components/Paragraphs/Paragraphs";
import "./Home.css";
export const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <TextContainer size="large" darkMode={darkMode}>
        <Title
          content='Home'
          type="normal"
          darkMode={darkMode}
        />
        <Paragraphs content='Hello! I`m Paul, the creator of this website.' darkMode={darkMode} />
        <Paragraphs content='This website is maded with React.js and styled with only basic CSS.' darkMode={darkMode} />
        <Paragraphs content='I`ve been learning React.js by one month and this is made just for practice.' darkMode={darkMode} />
      </TextContainer>
    </>
  );
};
