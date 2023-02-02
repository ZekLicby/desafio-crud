import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    colors: {
        white: "#FFF",
        green: ["#5CB85C", "#5CDD5C"],
        yellow: ["#F0AD4E", "#F9CD4E"],
        red: ["#D9534F", "#FF534F"],
        blue: ["#337AB7", "#337AFF"],
        gray: ["#AAA", "#CCC"],
    },
};

export const lightTheme = {
    background: "#EBF4F8",
    titles: "#2C2738",
    text: "#2C2738",
    accent: "#0880AE",
};

export const darkTheme = {
    background: "#1C2025",
    titles: "#D6E1DF",
    text: "#D6E1DF",
    accent: "#8A85FF",
};
