import React, { useState } from "react";
import "../App.css";
import { ThemeProvider } from "styled-components";
import Intro from "./Intro";
import MenuToggle from "./MenuToggle";
import Projects from "./Projects";
import Footer from "./Footer";
import Menu from "./Menu";
import { GlobalStyle } from "../globalstyles";
import { darkTheme, lightTheme } from "../components/Themes";
import { useDarkMode } from "../helpers/useDarkMode";
import About from "./About";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <MenuToggle setShowMenu={setShowMenu} />
      {showMenu && <Menu setShowMenu={setShowMenu} setTheme={themeToggler} theme={theme} />}
      <Intro />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
