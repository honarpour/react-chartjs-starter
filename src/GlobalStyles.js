import { createGlobalStyle } from 'styled-components';

export const globalPadding = 30;

const GlobalStyles = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 13px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eeeeee;
    color: #000000;
  }
`;

export default GlobalStyles;
