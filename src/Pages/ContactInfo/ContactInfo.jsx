import { TextContainer } from "../../components/TextContainer/TextContainer";
import { Title } from "../../components/Title/Title";
import { Paragraphs } from "../../components/Paragraphs/Paragraphs";
export const ContactInfo = ({ darkMode, data }) => {
  return (
    <TextContainer size="large" darkMode={darkMode}>
      <Title
        content={data.contactInfo.title}
        type="normal"
        darkMode={darkMode}
      />
      <Paragraphs content={data.contactInfo.content} darkMode={darkMode} />
    </TextContainer>
  );
};
