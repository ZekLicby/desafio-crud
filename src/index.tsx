import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import {defaultTheme} from "./Styles/theme/Theme";
import GlobalStyle from './Styles/global'

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme} >
            <GlobalStyle/>
            <Home />
        </ThemeProvider>
    </React.StrictMode>
);
