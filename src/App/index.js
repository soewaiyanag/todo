import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import DarkContext from "context/DarkContext";
import GlobalStyle from "shared/Global";
import Header from "./Header";
import Main from "./Main";
import { staticTheme, darkTheme, lightTheme } from "themes";

function App() {
  const { isDark } = useContext(DarkContext);
  const theme = isDark ? darkTheme : lightTheme;
  const rootTheme = { ...theme, ...staticTheme };

  return (
    <>
      <ThemeProvider theme={rootTheme}>
        <GlobalStyle />
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
