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
// import Layout from "./Layout";
import Skills from "./Skills";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <MenuToggle setShowMenu={setShowMenu} />
      {showMenu && <Menu setShowMenu={setShowMenu} setTheme={themeToggler} theme={theme} />}
      {/* <Layout> */}
      <Intro />
      <About />
      <Skills />
      <Projects />
      {/* </Layout> */}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
