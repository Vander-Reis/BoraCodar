import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: ${color => color.theme.background};
      color: ${color => color.theme.color};
      font-family: 'Lato', sans-serif;
   }

`
