import { createGlobalStyle } from 'styled-components';
import transition from './transition';
import { zoomOutAnimation } from './animation';

const GlobalStyle = createGlobalStyle`
    body {
        ${zoomOutAnimation}
        ${transition};
        background-color: ${({ theme }) => theme.colors.main};
        overflow-x: hidden;
    }

    #root {
        position: relative;
      }
`;

export default GlobalStyle;
