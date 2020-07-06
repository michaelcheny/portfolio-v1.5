import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 100ms;
`;

const Intro = () => {
  return <Section>Intro</Section>;
};

export default Intro;
