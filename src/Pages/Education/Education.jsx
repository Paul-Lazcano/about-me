import { TextContainer } from "../../components/TextContainer/TextContainer";
import { Title } from "../../components/Title/Title";
import { Paragraphs } from "../../components/Paragraphs/Paragraphs";
export const Education = ({ darkMode, data }) => {
  return (
    <TextContainer size="large" darkMode={darkMode}>
      <Title
        content={data.education.title}
        type="normal"
        darkMode={darkMode}
      />
      <Paragraphs content={data.education.content} darkMode={darkMode} />
    </TextContainer>
  );
};