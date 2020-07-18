import React from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import gucciFlipFlop from "../assets/images/gucciFlipFlop.png";

const Toggle = styled.button`
  position: fixed;
  right: 0;
  top: 0;
  margin-top: 1rem;
  margin-right: 1.1rem;
    color: ${(props) => props.theme.textSecondary};
  /* background-color: ${(props) => props.theme.textSecondary}; */
  background: none;
  transition: 200ms linear;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  color: ${(props) => props.theme.accent};
    /* background-color: ${(props) => props.theme.accent}; */
  }
`;

const MenuToggle = ({ setShowMenu }) => {
  return (
    <div>
      <Toggle onClick={() => setShowMenu(true)}>
        {/* <img src={gucciFlipFlop} alt="guccimenu" style={{ height: "1.2rem" }} /> */}
        <FontAwesomeIcon icon={faBars} size="1x" style={{ transform: "scale(1.5)" }} />
      </Toggle>
    </div>
  );
};

export default MenuToggle;
