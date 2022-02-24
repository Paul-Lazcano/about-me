import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/DarkTheme";
import { Header } from "../Header/Header";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";
import { MainContent } from "../MainContent/MainContent";
import { Title } from "../Title/Title";
import { Menu } from "../Menu/Menu";
import { Home } from "../../Pages/Home";
import "./App.css";

export const App = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`App ${darkMode && "App--dark-mode"}`}>
        <MainContent darkMode={darkMode}>
          <Header>
            <ToggleThemeButton setDarkMode={setDarkMode} darkMode={darkMode} />
            <Title content="Paul Lazcano" type="biggest" darkMode={darkMode} />
            <Menu darkMode={darkMode} />
          </Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainContent>
      </div>
    </BrowserRouter>
  );
};
