import React, { useState } from "react";
import "../App.css";
import { ThemeProvider } from "styled-components";
import Intro from "./Intro";
import ThemeToggle from "./ThemeToggle";
import Projects from "./Projects";
import Footer from "./Footer";

const darkTheme = {
  primary: "#2E3440",
  secondary: "#434C5E",
  ternary: "#434C5E",
  textPrimary: "#D8DEE9",
  textSecondary: "#ECEFF4",
  textAccent: "#8FBCBB",
};

const lightTheme = {
  primary: "#D8DEE9",
  secondary: "#ECEFF4",
  ternary: "#E5E9F0",
  textPrimary: "#2E3440",
  textSecondary: "#4C566A",
  textAccent: "#81A1C1",
};

const App = () => {
  const [dark, setDark] = useState(true);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <ThemeToggle toggle={setDark} />
      <Intro />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
