import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import DarkContext from 'context/DarkModeContext';
import GlobalStyle from 'shared/Global';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import { darkTheme, lightTheme } from 'theme/theme';

function App() {
  const { isDarkMode } = useContext(DarkContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        {/*animationDuration is for body tag */}
        <GlobalStyle animationDuration={'1s'} />
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
