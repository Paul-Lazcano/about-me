import { TextContainer } from "../../components/TextContainer/TextContainer";
import { Title } from "../../components/Title/Title";
import { Paragraphs } from "../../components/Paragraphs/Paragraphs";
export const NotFound = ({ darkMode, data }) => {
  return (
    <TextContainer size="large" darkMode={darkMode}>
      <Title
        content='Not Found :('
        type="normal"
        darkMode={darkMode}
      />
      <Paragraphs content='Hi again! seems like Yoe got lost...' darkMode={darkMode} />
      <Paragraphs content='Open the menu to comeback' darkMode={darkMode} />
    </TextContainer>
  );
};
