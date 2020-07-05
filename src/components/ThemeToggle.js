import React from "react";
import styled from "styled-components";

const Toggle = styled.button`
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 5px;
  padding: 0.3rem 0.85rem;
  margin: 6px;
  background-color: ${(props) => props.theme.ternary};
  color: ${(props) => props.theme.textPrimary};
  border: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    background-color: ${(props) => props.theme.secondary};
  }
`;

const ThemeToggle = ({ toggle }) => {
  return (
    <div>
      <Toggle onClick={() => toggle((prev) => !prev)}>theme</Toggle>
    </div>
  );
};

export default ThemeToggle;
