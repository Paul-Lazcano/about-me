import { TextContainer } from "../../components/TextContainer/TextContainer";
import { Title } from "../../components/Title/Title";
import { Paragraphs } from "../../components/Paragraphs/Paragraphs";

export const WorkExperience = ({ darkMode, data }) => {
  return (
    <TextContainer size="large" darkMode={darkMode}>
      <Title
        content={data.workExperience.title}
        type="normal"
        darkMode={darkMode}
      />
      <Paragraphs content={data.workExperience.content} darkMode={darkMode} />
    </TextContainer>
  );
};
