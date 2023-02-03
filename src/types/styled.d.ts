import styled from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string
            green: string[]
            yellow: string[]
            red: string[]
            blue: string[]
            gray: string[]
        },
        lightTheme: {
            background: string
            titles: string
            text: string
            accent: string
        }
    }
}