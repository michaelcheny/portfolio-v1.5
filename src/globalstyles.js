import { createGlobalStyle } from "styled-components";
import bg from "./assets/images/DSC_0565.JPG";
import lato from "./fonts/Lato.ttf";
import merriLight from "./fonts/Merriweather-Light.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Lato';
  src: local('Lato'), url(${lato}) format('truetype');
}
@font-face {
  font-family: 'Merriweather-Light';
  src: local('Merriweather-Light'), url(${merriLight}) format('truetype');
}
  body {
    /* background: ${({ theme }) => theme.primary}; */
    background: url(${bg});
    background-attachment: fixed;
    background-size: cover;
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Lato', Tahoma, Helvetica, Arial, Roboto, sans-serif;
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
    background-color: ${({ theme }) => theme.accent};
    margin: 0.5rem 1rem;
    width: 300px;
    margin-bottom: 2.5rem;
  }

  .tailing-divider {
    ::after {
      content: "";
      display: block;
      height: 1px;
      width: 300px;
      background-color: ${({ theme }) => theme.accent};
      top: -5px;
      margin-left: 20px;
    }
  }

  h1 {
    font-size: 80px;
    font-weight: 900;
    color: ${({ theme }) => theme.textSecondary};
  }

  h2 {
    font-size: 2rem;
    /* padding-bottom: .3rem; */
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Merriweather-Light'
  }


  `;
