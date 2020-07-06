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
  background-color: ${(props) => props.theme.ternary};
  color: ${(props) => props.theme.textPrimary};
  border: none;
  transition: 200ms;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    /* background-color: ${(props) => props.theme.textAccent}; */
    color: ${(props) => props.theme.textAccent};
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
