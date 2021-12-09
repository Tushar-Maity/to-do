import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700;800&family=Roboto:wght@100&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Maven Pro', sans-serif;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;