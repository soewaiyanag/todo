import { createGlobalStyle } from "styled-components";
import transition from "./transition";
import { zoomOutAnimation } from "./animation";

const GlobalStyle = createGlobalStyle`
    body {
        ${zoomOutAnimation}
        ${transition};
        background-color: ${({ theme }) => theme.colors.main};
    }

    #root {
        position: relative;
    }

    input, h1, div > input + span {
        font-family: "Josefin Sans", sans-serif;
    }
`;

export default GlobalStyle;
