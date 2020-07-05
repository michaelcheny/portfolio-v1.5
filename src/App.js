import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Intro from "./components/Intro";

const theme = {
  primary: "#2E3440",
  secondary: "#434C5E",
  textPrimary: "#D8DEE9",
  textSecondary: "#ECEFF4",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Intro />
      </div>
    </ThemeProvider>
  );
};

export default App;
