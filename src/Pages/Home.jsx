import { useContext } from "react";
import { usePersonalInfo } from "../hooks/usePersonalInfo";
import { ThemeContext } from "../context/DarkTheme";
import { TextContainer } from "../components/TextContainer/TextContainer";
import { Title } from "../components/Title/Title";
import { Paragraphs } from "../components/Paragraphs/Paragraphs";
import { Links } from "../components/Links/Links";
export const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const data = usePersonalInfo();
  return (
    <>
      <TextContainer size="large" darkMode={darkMode} type="wrapper">
        <TextContainer size="medium" darkMode={darkMode}>
          <Title
            content={data.contactInfo.title}
            type="normal"
            darkMode={darkMode}
          />
          <Paragraphs content={data.contactInfo.content} darkMode={darkMode} />
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
        <Paragraphs content={data.workExperience.content} darkMode={darkMode} />
      </TextContainer>
      <TextContainer size="large" darkMode={darkMode}>
        <Title
          content={data.education.title}
          type="normal"
          darkMode={darkMode}
        />
        <Paragraphs content={data.education.content} darkMode={darkMode} />
      </TextContainer>
    </>
  );
};
