import React from "react";
import styled from "styled-components";
import { useClickOutside } from "../helpers/ClickOutsideHook";
import gucciFlipFlop from "../assets/images/gucciFlipFlop.png";
import resume from "../assets/resume/resume.pdf";

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

  @media (max-width: 768px) {
    width: 50vw;
    height: 40vh;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textSecondary};
  &:hover {
    color: ${(props) => props.theme.textAccent};
  }
`;

const Menu = ({ setShowMenu, setTheme, theme }) => {
  const outsideNode = useClickOutside(() => setShowMenu(false));

  return (
    <MenuContainer>
      <InsideMenu ref={outsideNode}>
        <img
          src={gucciFlipFlop}
          alt="toggleTheme"
          style={{ height: "2rem" }}
          onClick={() => {
            console.log(theme);
            theme === "dark" ? setTheme("dark") : setTheme("light");
          }}
        />
        <Link href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </Link>
      </InsideMenu>
    </MenuContainer>
  );
};

export default Menu;
