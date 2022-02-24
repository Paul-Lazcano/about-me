import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageContainer } from "../PageContainer/PageContainer";
import { useContext } from "react";
import { ThemeContext } from "../../context/DarkTheme";
import { Header } from "../Header/Header";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";
import { MainContent } from "../MainContent/MainContent";
import { Title } from "../Title/Title";
import { Menu } from "../Menu/Menu";
import { Home } from "../../Pages/Home/Home";
import { ContactInfo } from "../../Pages/ContactInfo/ContactInfo";
import { SocialLinks } from "../../Pages/SocialLinks/SocialLinks";
import { usePersonalInfo } from "../../hooks/usePersonalInfo";
import "./App.css";
import { Objectives } from "../../Pages/Objectives/Objectives";
import { WorkExperience } from "../../Pages/WorkExperience/WorkExperience";
import { Education } from "../../Pages/Education/Education";

export const App = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const data = usePersonalInfo();
  return (
    <BrowserRouter>
      <div className={`App ${darkMode && "App--dark-mode"}`}>
        <MainContent darkMode={darkMode}>
          <Header>
            <ToggleThemeButton setDarkMode={setDarkMode} darkMode={darkMode} />
            <Title content="Paul Lazcano" type="biggest" darkMode={darkMode} />
            <Menu darkMode={darkMode} />
          </Header>
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/contact-info" element={<ContactInfo darkMode={darkMode} data={data} />} />
              <Route path="/social-links" element={<SocialLinks darkMode={darkMode} data={data} />} />
              <Route path="/objectives" element={<Objectives darkMode={darkMode} data={data} />} />
              <Route path="/work-experience" element={<WorkExperience darkMode={darkMode} data={data} />} />
              <Route path="/education" element={<Education darkMode={darkMode} data={data} />} />
            </Routes>
          </PageContainer>
        </MainContent>
      </div>
    </BrowserRouter>
  );
};
