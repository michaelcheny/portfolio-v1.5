import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;
  }
  p {
    line-height: 125%;
  }
  `;
