import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  /* padding: 200px 200px; */
  padding-bottom: 5rem;
  margin: 0px auto;
  border: 1px purple solid;
`;

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;
