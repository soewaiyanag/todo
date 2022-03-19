import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import darkBg from "../assets/bg-desktop-dark.jpg";
import lightBg from "../assets/bg-desktop-light.jpg";
import lightSwitch from "../assets/icon-moon.svg";
import darkSwitch from "../assets/icon-sun.svg";
import DarkContext from "../context/DarkContext";
import GlobalStyle from "../shared/Global";
import Header from "./Header";
import Main from "./Main";
import { store } from "../store/store";

console.log(store.getState());

const staticTheme = {
  sizes: {
    headerHeight: "14rem",
    borderRadius: "5px",
  },
};

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
  const commonTheme = { ...theme, ...staticTheme };

  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyle />
      <>
        <Header />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
