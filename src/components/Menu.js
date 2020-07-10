import React from "react";
import styled from "styled-components";
import { useClickOutside } from "../helpers/ClickOutsideHook";
import resume from "../assets/resume/resume.pdf";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const MenuContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 200ms;
`;

const InsideMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30%;
  width: 40%;
  border-radius: 5px;
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
  .link {
    padding: 5px 0;
    padding-left: 1rem;
    transition: 200ms linear;
    color: ${(props) => props.theme.textSecondary};
    text-decoration: none;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      color: ${({ theme }) => theme.textAccent};
    }
  }

  @media (max-width: 768px) {
    width: 50vw;
    height: 40vh;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textSecondary};
  transition: 200ms linear;
  align-self: flex-end;
  justify-self: flex-end;
  &:hover {
    transform: scale(1.05);
    color: ${(props) => props.theme.textAccent};
  }
`;

const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textSecondary};
  border: 1px green solid;
  transition: 200ms linear;
  height: 70%;
  h3 {
    font-weight: 400;
    padding-bottom: 5px;
  }
`;

const OtherLinks = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 1px red solid;
  height: 70%;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  text-decoration: none;
`;

const Menu = ({ setShowMenu, setTheme, theme }) => {
  const outsideNode = useClickOutside(() => setShowMenu(false));

  return (
    <MenuContainer>
      <InsideMenu ref={outsideNode}>
        <SectionLinks>
          <h3>Jump to Section</h3>
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
        </SectionLinks>
        <Contacts>
          <h3>Get in Touch</h3>
          <a href="mailto:michaelchengaming@gmail.com" className="link">
            Email me
          </a>
        </Contacts>
        <OtherLinks>
          <p>Theme</p>
          <FontAwesomeIcon
            className={theme === "dark" ? "theme-dark btn" : "theme-light btn"}
            icon={faLightbulb}
            size="2x"
            onClick={() => (theme === "dark" ? setTheme("dark") : setTheme("light"))}
          />
          <p>Links</p>
          <ResumeLink href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </ResumeLink>
        </OtherLinks>
      </InsideMenu>
    </MenuContainer>
  );
};

export default Menu;
