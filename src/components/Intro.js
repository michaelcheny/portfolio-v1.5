import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textPrimary};
`;

const Intro = () => {
  return <Section>thing</Section>;
};

export default Intro;
