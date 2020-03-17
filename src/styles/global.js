import { createGlobalStyle } from 'styled-components';

import wallpaper from '../images/wallpaper.jpg';

const GlobalStyles = createGlobalStyle`
  html,
  body,
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Pathway Gothic One', sans-serif;
    color: #fff;
    letter-spacing: 2px;
  }

  body {
    background: #000 url(${wallpaper}) no-repeat;
  }

  h1 {
    color: #fff;
  }

  fieldset {
    border: 1px solid #fff;
  }

  legend {
    color: #fff;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
