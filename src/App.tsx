import React, { useContext, useState } from "react";
// ROUTES
import Routes from "./routes";
// CONTEXT
import ContextTheme from "./contexts/ContextTheme";
// STYLES
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/themes/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const ContTheme = useContext(ContextTheme);

  const [theme, setTheme] = useState({
    checked: ContTheme.theme.checked,
  });

  return (
    <ContextTheme.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme.checked ? dark : light}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </ContextTheme.Provider>
  );
}

export default App;
