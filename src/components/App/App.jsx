import { useContext } from "react";
import { usePersonalInfo } from "../../hooks/usePersonalInfo";
import { ThemeContext } from "../../context/DarkTheme";
import { Header } from "../Header/Header";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";
import { MainContent } from "../MainContent/MainContent";
import { TextContainer } from "../TextContainer/TextContainer";
import { Title } from "../Title/Title";
import { Paragraphs } from "../Paragraphs/Paragraphs";
import { Links } from "../Links/Links";
import "./App.css";

export const App = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const data = usePersonalInfo();
  return (
    <div className={`App ${darkMode && "App--dark-mode"}`}>
      <MainContent darkMode={darkMode}>
        <Header>
          <ToggleThemeButton setDarkMode={setDarkMode} darkMode={darkMode} />
          <Title content="Paul Lazcano" type="biggest" darkMode={darkMode} />
        </Header>
        <TextContainer size="large" darkMode={darkMode} type="wrapper">
          <TextContainer size="medium" darkMode={darkMode}>
            <Title
              content={data.contactInfo.title}
              type="normal"
              darkMode={darkMode}
            />
            <Paragraphs
              content={data.contactInfo.content}
              darkMode={darkMode}
            />
          </TextContainer>
          <TextContainer size="medium" darkMode={darkMode}>
            <Title
              content={data.socialLinks.title}
              type="normal"
              darkMode={darkMode}
            />
            <Links content={data.socialLinks.content} darkMode={darkMode} />
          </TextContainer>
        </TextContainer>

        <TextContainer size="large" darkMode={darkMode}>
          <Title
            content={data.objectives.title}
            type="normal"
            darkMode={darkMode}
          />
          <Paragraphs content={data.objectives.content} darkMode={darkMode} />
        </TextContainer>
        <TextContainer size="large" darkMode={darkMode}>
          <Title
            content={data.workExperience.title}
            type="normal"
            darkMode={darkMode}
          />
          <Paragraphs
            content={data.workExperience.content}
            darkMode={darkMode}
          />
        </TextContainer>
        <TextContainer size="large" darkMode={darkMode}>
          <Title
            content={data.education.title}
            type="normal"
            darkMode={darkMode}
          />
          <Paragraphs content={data.education.content} darkMode={darkMode} />
        </TextContainer>
      </MainContent>
    </div>
  );
};
