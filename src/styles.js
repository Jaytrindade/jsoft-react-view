import { styledComponents } from "./view";

const {
  styled, // styled => from styled-components
  others: { createGlobalStyle } // others => contain others features from styled-components
} = styledComponents;

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif, -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    position: relative;
  }
  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
`;

export default GlobalStyle;
