import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import Header from "./components/Header";
import darkBg from "./assets/bg-desktop-dark.jpg";
import lightBg from "./assets/bg-desktop-light.jpg";
import lightSwitch from "./assets/icon-moon.svg";
import darkSwitch from "./assets/icon-sun.svg";
import { useContext } from "react";
import DarkContext from "./context/DarkContext";
import Main from "./components/Main";

const darkTheme = {
  icons: {
    headerBg: darkBg,
    switch: darkSwitch,
  },
  colors: {
    main: "hsl(235, 21%, 11%)",
    box: "hsl(235, 24%, 19%)",
    border: "hsl(233, 14%, 35%)",
    primaryText: "hsl(234, 39%, 85%)",
  },
};

const lightTheme = {
  icons: {
    headerBg: lightBg,
    switch: lightSwitch,
  },
  colors: {
    main: "hsl(236, 33%, 92%)",
    box: "hsl(0, 0%, 98%)",
    border: "hsl(233, 11%, 84%)",
    primaryText: "hsl(235, 19%, 35%)",
  },
};

function App() {
  const { isDark } = useContext(DarkContext);
  const theme = isDark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Header />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
