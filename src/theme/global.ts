import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --white: #FFF;
    --green: #5CB85C;
    --yellow: #F0AD4E;
    --red: #D9534F;
    --blue: #337AB7;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;
