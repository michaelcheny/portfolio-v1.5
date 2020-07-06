import React from "react";
import styled from "styled-components";
import { useClickOutside } from "../helpers/ClickOutsideHook";
import gucciFlipFlop from "../assets/images/gucciFlipFlop.png";

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
`;

const Menu = ({ setShowMenu, toggleTheme }) => {
  const outsideNode = useClickOutside(() => setShowMenu(false));

  return (
    <MenuContainer>
      <InsideMenu ref={outsideNode}>
        <img
          src={gucciFlipFlop}
          alt="toggleTheme"
          style={{ height: "2rem" }}
          onClick={() => toggleTheme((prev) => !prev)}
        />
        <a href="#" target="_blank">
          ADD STUFF HERE LIKE RESUME
        </a>
      </InsideMenu>
    </MenuContainer>
  );
};

export default Menu;
