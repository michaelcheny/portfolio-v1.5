import React, { useRef, useEffect } from "react";
import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 40vw;
  border-radius: 5px;
  background-color: ${(props) => props.theme.secondary};
`;

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (!domNode.current.contains(event.target)) handler();
    };
    document.addEventListener("click", outsideClickHandler);
    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  });
  return domNode;
};

const Menu = ({ setShowMenu }) => {
  const outsideNode = useClickOutside(() => setShowMenu(false));

  return (
    <MenuContainer>
      <InsideMenu ref={outsideNode}>hjkfdshjklas</InsideMenu>
    </MenuContainer>
  );
};

export default Menu;
