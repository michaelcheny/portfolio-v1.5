import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textPrimary};
`;

const Item = styled.a`
  display: inline-block;
  margin: 0 1rem;
  color: ${(props) => props.theme.textPrimary};
  transition: 150ms linear;
  &:hover {
    color: ${(props) => props.theme.textAccent};
    transform: scale(1.3);
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="social" data-aos="fade-up">
      <SocialContainer>
        <Item href="mailto:michaelchengaming@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
        </Item>
        <Item
          href="https://www.linkedin.com/in/michaelchen13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Item>
        <Item href="https://github.com/michaelcheny" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </Item>
        <Item href="https://medium.com/@michaelychen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </Item>
        <Item
          href="https://www.youtube.com/channel/UCsVPeLiZClEYtyPHfweRniw?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
        </Item>
      </SocialContainer>
      <NameContainer>Built by Michael Chen</NameContainer>
    </FooterContainer>
  );
};

export default Footer;
