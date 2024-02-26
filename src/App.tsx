import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "ui/theme/global.style";
import { defaultThemes } from "ui/theme/theme";
import Ui from "ui";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyle />
      <Ui />
    </ThemeProvider>
  );
};

export default App;
