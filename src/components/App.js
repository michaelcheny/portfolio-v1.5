import React, { useState, useEffect } from "react";
import "../App.css";
import { ThemeProvider } from "styled-components";
import Intro from "./Intro";
import MenuToggle from "./MenuToggle";
import Projects from "./Projects";
import Footer from "./Footer";
import Menu from "./Menu";

const darkTheme = {
  primary: "#2E3440",
  secondary: "#3B4252",
  ternary: "#4C566A",
  textPrimary: "#D8DEE9",
  textSecondary: "#ECEFF4",
  textAccent: "#8FBCBB",
  textAccent2: "#88C0D0",
};

const lightTheme = {
  primary: "#D8DEE9",
  secondary: "#ECEFF4",
  ternary: "#E5E9F0",
  textPrimary: "#2E3440",
  textSecondary: "#4C566A",
  textAccent: "#81A1C1",
  textAccent2: "#5E81AC",
};

const App = () => {
  const [dark, setDark] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("theme")) setDark(localStorage.getItem("theme"));
  // }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <MenuToggle setShowMenu={setShowMenu} />
      {showMenu && <Menu setShowMenu={setShowMenu} toggleTheme={setDark} theme={dark} />}
      <Intro />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
