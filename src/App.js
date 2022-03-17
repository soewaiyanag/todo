import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import Header from "./components/Header";
import darkBg from "./assets/bg-desktop-dark.jpg";
import lightBg from "./assets/bg-desktop-light.jpg";
import lightSwitch from "./assets/icon-moon.svg";
import darkSwitch from "./assets/icon-sun.svg";
import Container from "./styles/Container";

const theme = {
  icons: {
    headerBg: lightBg,
    switch: lightSwitch,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Header>
          <Container></Container>
        </Header>
      </>
    </ThemeProvider>
  );
}

export default App;
