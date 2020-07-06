import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5vh;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.primary};
`;

const Item = styled.a`
  display: inline-block;
  margin: 0 1rem;
  color: ${(props) => props.theme.textPrimary};
  transition: transform 300ms;
  &:hover {
    color: ${(props) => props.theme.textSecondary};
    transform: scale(1.3);
  }
`;

const Footer = () => {
  return (
    <Container>
      <Item href="mailto:michaelchengaming@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </Item>
      <Item href="https://www.linkedin.com/in/michaelchen13/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Item>
      <Item href="https://github.com/michaelcheny" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Item>
      <Item href="https://medium.com/@michaelychen" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </Item>
      <Item
        href="https://www.youtube.com/channel/UCsVPeLiZClEYtyPHfweRniw?view_as=subscriber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </Item>
    </Container>
  );
};

export default Footer;
