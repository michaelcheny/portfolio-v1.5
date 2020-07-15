import { createGlobalStyle } from "styled-components";
import bg from "./assets/images/DSC_0565.JPG";

export const GlobalStyle = createGlobalStyle`
  body {
    /* background: ${({ theme }) => theme.primary}; */
    background: url(${bg});
    background-attachment: fixed;
    background-size: cover;
    color: ${({ theme }) => theme.textPrimary};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;

    .overlay {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.primary};
      z-index: -1;
      opacity: .92;
    }
  }
  p {
    line-height: 125%;
  }
  `;
