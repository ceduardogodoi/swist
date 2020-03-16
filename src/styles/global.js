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
  }

  body {
    background: #000 url(${wallpaper}) center no-repeat;
  }

  fieldset {
    border: 1px solid #fff;
  }

  legend {
    color: #fff;
  }

  h1 {
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
