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

  .divider {
    content: "";
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.textAccent};
    margin: 0.5rem 1rem;
    width: 300px;
    margin-bottom: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    padding-bottom: .3rem;
    display: flex;
    align-items: center;
  }

  .header {
    color: ${({ theme }) => theme.textSecondary};

  }
  `;
