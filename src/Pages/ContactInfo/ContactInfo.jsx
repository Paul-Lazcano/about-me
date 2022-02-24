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
      <Paragraphs content='Hi! You can follow me in my social media accounts!' darkMode={darkMode} />
      <Paragraphs content='Or' darkMode={darkMode} />
      <Paragraphs content='Contact me by my email <alwaysbetterpaul@gmail.com>' darkMode={darkMode} />
    </TextContainer>
  );
};
