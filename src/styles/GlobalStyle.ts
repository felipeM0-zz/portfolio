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
  }

  body,
  input,
  button,
  label,
  textarea {
    font: 400 1rem Quicksand Pro, sans-serif !important;
  }
`;

export default GlobalStyle;
