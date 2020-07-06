import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5vh;
  background-color: ${(props) => props.theme.primary};
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0 1rem;
  /* color: ${(props) => props.theme.textPrimary}; */
`;

const Footer = () => {
  return (
    <Foot>
      <Ul>
        <Li>item</Li>
        <Li>uten</Li>
        <Li>item</Li>
        <Li>imte</Li>
      </Ul>
    </Foot>
  );
};

export default Footer;
