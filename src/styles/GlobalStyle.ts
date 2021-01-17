import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-background: ${(props) => props.theme.colors.background};
    --color-background-darker: ${(props) => props.theme.colors.background_darker};
    --color-background-text: ${(props) => props.theme.colors.background_text};
    --color-background-dt: ${(props) => props.theme.colors.background_dt};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  html {
    transition: all 0.3s;
    background: ${(props) => props.theme.colors.background_darker};
    min-width: 320px;
  }

  body,
  input,
  button,
  label,
  textarea {
    font: 400 1rem 'Balsamiq Sans', cursive !important;
  }
`;

export default GlobalStyle;
