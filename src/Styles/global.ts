import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    }

    body {
        background-color: ${(props:any) => props.theme.background};
        color: ${(props:any) => props.theme.text};        
    }

    h1 {
        color: ${(props:any) => props.theme.titles};        
    }

    .accent {
        background-color: ${(props:any) => props.theme.accent};
        color: ${(props:any) => props.theme.text};
        height: 30px;
    }
`;
