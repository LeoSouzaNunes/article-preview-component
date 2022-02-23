import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    transition: .3s;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    background-color: hsl(210, 46%, 95%);
    font-family: 'Manrope', sans-serif;
}

#root{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;

    width:100%;
    min-height:100vh;
}

`;

export default GlobalStyle;
