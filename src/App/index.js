import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import DarkContext from 'context/DarkContext';
import GlobalStyle from 'shared/Global';
import Header from './Header/Header';
import Main from './Main/Main';
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
