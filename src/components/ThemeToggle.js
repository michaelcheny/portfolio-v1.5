import React from "react";
import styled from "styled-components";

const Toggle = styled.button`
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 5px;
  padding: 1px 3px;
  margin: 6px;
  background-color: ${(props) => props.theme.ternary};
  color: ${(props) => props.theme.textPrimary};
  border: none;
`;

const ThemeToggle = ({ toggle }) => {
  return (
    <div>
      <Toggle onClick={() => toggle((prev) => !prev)}>theme</Toggle>
    </div>
  );
};

export default ThemeToggle;
