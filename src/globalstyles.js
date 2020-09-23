import styled, { createGlobalStyle } from "styled-components";
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

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
    transition: 200ms linear;
    &:hover {
      color:${({ theme }) => theme.accent};
    }
  }

  .divider {
    content: "";
    display: block;
    height: 2px;
    /* color:  */
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
    font-size: 75px;
    font-weight: 900;
    color: ${({ theme }) => theme.textSecondary};
  }

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Merriweather-Light'
  }

  h3 {
    font-family:'Merriweather-Light'; 
    padding-bottom: .5rem;
    padding-top: 1rem;
  }


  `;

export const Icon = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
  color: ${(props) => props.theme.textPrimary};
  transition: 150ms linear;
  &:hover {
    color: ${(props) => props.theme.accent};
    /* transform: scale(1.05); */
  }
`;

export const BulletList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  margin-top: 0.6rem;
  padding-left: 2rem;
  li {
    ::before {
      content: "⌁ ";
      font-size: 20px;
      margin-bottom: 2px;
      color: ${({ theme }) => theme.accent};
    }
  }
`;
