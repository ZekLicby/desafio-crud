import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    }

    body {
        background-color: ${({theme}:any) => theme.lightTheme.background};
        color: ${({theme}:any) => theme.lightTheme.text};        
    }

    h1 {
        color: ${({theme}:any) => theme.lightTheme.titles};        
    }
`;
