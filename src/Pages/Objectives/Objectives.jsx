import { TextContainer } from "../../components/TextContainer/TextContainer";
import { Title } from "../../components/Title/Title";
import { Paragraphs } from "../../components/Paragraphs/Paragraphs";
export const Objectives = ({ darkMode, data}) => {
  return (
    <TextContainer size="large" darkMode={darkMode}>
      <Title
        content={data.objectives.title}
        type="normal"
        darkMode={darkMode}
      />
      <Paragraphs content={data.objectives.content} darkMode={darkMode} />
    </TextContainer>
  );
};
