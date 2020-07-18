import React from "react";
import styled from "styled-components";
import { Item } from "../globalstyles";
import { useClickOutside } from "../helpers/ClickOutsideHook";
import resume from "../assets/resume/resume.pdf";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faEnvelopeSquare, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const MenuContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 200ms;
  z-index: 5;
`;

const InsideMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  width: 60%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.secondary};
  transition: 200ms;
  /* text-decoration: none; */

  .theme-light {
    color: orange;
  }
  .theme-dark {
    color: darkgrey;
  }
  .btn {
    &:hover {
      cursor: pointer;
      transform: scale(1.13);
    }
  }

  @media (max-width: 800px) {
    width: 70%;
    /* height: 40vh; */
  }
`;

const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textSecondary};
  /* border: 1px green solid; */
  height: 100%;
  width: 40%;
  background-color: ${({ theme }) => theme.secondary};
  transition: 200ms linear;
  /* height: 70%; */
  h3 {
    font-weight: 400;
    padding-bottom: 5px;
  }

  div {
    display: flex;
    flex-direction: column;

    .link {
      padding: 5px 0;
      padding-left: 1rem;
      transition: 200ms linear;
      color: ${(props) => props.theme.textSecondary};
      text-decoration: none;

      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        color: ${({ theme }) => theme.accent};
      }
    }
  }
`;

const OtherLinks = styled.div`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  color: ${({ theme }) => theme.textSecondary};

  .container {
    display: flex;
    justify-content: space-evenly;
  }
  p {
    transition: 200ms linear;
  }
`;

const Menu = ({ setShowMenu, setTheme, theme }) => {
  const outsideNode = useClickOutside(() => setShowMenu(false));

  return (
    <MenuContainer>
      <InsideMenu ref={outsideNode}>
        <SectionLinks>
          <div>
            <h3>Navigate</h3>
            <Link className="link" to="intro" smooth duration={400}>
              Intro
            </Link>
            <Link className="link" to="about" smooth duration={400}>
              About
            </Link>
            <Link className="link" to="skills" smooth duration={400}>
              Skills
            </Link>
            <Link className="link" to="projects" smooth duration={400}>
              Projects
            </Link>
            <Link className="link" to="social" smooth duration={400}>
              Socials
            </Link>
          </div>
        </SectionLinks>
        {/* <Contacts>
          <h3>Get in Touch</h3>
          <a href="mailto:michaelchengaming@gmail.com" className="link">
            Email me
          </a>
        </Contacts> */}
        <OtherLinks>
          <h3>Contacts</h3>
          <div className="container">
            <Item href="mailto:michaelchengaming@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" className="icon" />{" "}
              {/* michaelchengaming@gmail.com */}
            </Item>
            <Item
              href="https://www.linkedin.com/in/michaelchen13/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />{" "}
              {/* linkedin.com/in/michaelchen13/ */}
            </Item>
            <Item href="https://github.com/michaelcheny" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icon" />
              {/* github.com/michaelcheny */}
            </Item>
            <Item
              href="https://medium.com/@michaelychen"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faMedium} size="2x" className="icon" />
              {/* medium.com/@michaelychen */}
            </Item>
            <Item
              href="https://www.youtube.com/channel/UCsVPeLiZClEYtyPHfweRniw?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutubeSquare} size="2x" className="icon" />
              {/* youtube */}
            </Item>
          </div>

          <h3>Theme</h3>
          <FontAwesomeIcon
            className={theme === "dark" ? "theme-dark btn" : "theme-light btn"}
            icon={faLightbulb}
            size="2x"
            onClick={() => (theme === "dark" ? setTheme("dark") : setTheme("light"))}
          />

          <h3>Resume</h3>
          <Item href={resume} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFile} size="2x" className="icon" />{" "}
          </Item>
        </OtherLinks>
      </InsideMenu>
    </MenuContainer>
  );
};

export default Menu;
