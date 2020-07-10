import React from "react";
import styled from "styled-components";
import { useClickOutside } from "../helpers/ClickOutsideHook";
import gucciFlipFlop from "../assets/images/gucciFlipFlop.png";
import resume from "../assets/resume/resume.pdf";
import { animateScroll as scroll, Link } from "react-scroll";
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
  height: 20vh;
  width: 30vw;
  border-radius: 5px;
  background-color: ${(props) => props.theme.secondary};
  transition: 200ms;

  .theme-light {
    color: orange;
  }
  .theme-dark {
    color: black;
  }
  .btn {
    &:hover {
      cursor: pointer;
      transform: scale(1.13);
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
  &:hover {
    color: ${(props) => props.theme.textAccent};
  }
`;

const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textSecondary};

  transition: 200ms linear;

  h3 {
    font-weight: 400;
    padding-bottom: 5px;
  }

  .link {
    padding: 5px 0;
    padding-left: 1rem;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      color: ${({ theme }) => theme.textAccent};
    }
  }
`;

const Menu = ({ setShowMenu, setTheme, theme }) => {
  const outsideNode = useClickOutside(() => setShowMenu(false));

  return (
    <MenuContainer>
      <InsideMenu ref={outsideNode}>
        <SectionLinks>
          <h3>Table of Contents</h3>
          <Link className="link" to="about" smooth={true} duration={400}>
            About
          </Link>
          <Link className="link" to="skills" smooth={true} duration={400}>
            Skills
          </Link>
          <Link className="link" to="projects" smooth={true} duration={400}>
            Projects
          </Link>
          <Link className="link" to="social" smooth={true} duration={400}>
            Socials
          </Link>
        </SectionLinks>
        {/* <img
          src={gucciFlipFlop}
          alt="toggleTheme"
          style={{ height: "2rem" }}
          onClick={() => (theme === "dark" ? setTheme("dark") : setTheme("light"))}
        /> */}
        <FontAwesomeIcon
          className={theme === "dark" ? "theme-dark btn" : "theme-light btn"}
          icon={faLightbulb}
          size="2x"
          onClick={() => (theme === "dark" ? setTheme("dark") : setTheme("light"))}
        />
        {/* 🌞🕶️ */}
        <ResumeLink href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </ResumeLink>
      </InsideMenu>
    </MenuContainer>
  );
};

export default Menu;
