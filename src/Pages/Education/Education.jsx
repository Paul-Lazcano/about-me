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
      <Paragraphs content="I studied programming speciality in my high school, then i started learnign in Platzi, a course online platform that specialice's in tech." darkMode={darkMode} />
      <Paragraphs content="I've learning that way for a year and a half. I'm currently learning in the enterprice i commented before with the guide of all the eployeers here." darkMode={darkMode} />
    </TextContainer>
  );
};