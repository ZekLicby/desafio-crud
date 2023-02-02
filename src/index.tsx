import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./Styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme, lightTheme } from "./Styles/theme/Theme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme || lightTheme || darkTheme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>
    </React.StrictMode>
);
