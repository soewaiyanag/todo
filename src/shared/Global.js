import { createGlobalStyle } from "styled-components";
import transition from "./transition";

const GlobalStyle = createGlobalStyle`


    body {
        ${transition}
        background-color: ${({ theme }) => theme.colors.main};
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        position: relative;
    }

    body, input {
        font-family: "Josefin Sans", sans-serif;
    }

`;

export default GlobalStyle;
