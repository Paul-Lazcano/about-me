import { TextContainer } from "../../components/TextContainer/TextContainer";
import { Title } from "../../components/Title/Title";
import { Links } from "../../components/Links/Links";
export const SocialLinks = ({darkMode, data}) => {
  return (
    <TextContainer size="large" darkMode={darkMode}>
      <Title
        content={data.socialLinks.title}
        type="normal"
        darkMode={darkMode}
      />
      <Links content={data.socialLinks.content} darkMode={darkMode} />
    </TextContainer>
  );
};
