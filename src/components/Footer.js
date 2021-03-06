import React from "react";
import styled from "styled-components";
import { Icon } from "../globalstyles";
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
  margin-top: 10vh;
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

const Footer = () => {
  return (
    <FooterContainer id="social" data-aos="fade-up">
      <SocialContainer>
        <Icon href="mailto:michaelchengaming@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/michaelchen13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Icon>
        <Icon href="https://github.com/michaelcheny" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </Icon>
        <Icon href="https://medium.com/@michaelychen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </Icon>
        <Icon
          href="https://www.youtube.com/channel/UCsVPeLiZClEYtyPHfweRniw?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
        </Icon>
      </SocialContainer>
      <NameContainer>
        <a href="https://github.com/michaelcheny/portfolio-v1.5">Built by Michael Chen</a>
      </NameContainer>
    </FooterContainer>
  );
};

export default Footer;
