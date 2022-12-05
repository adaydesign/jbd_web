import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: "K2D, system-ui, sans-serif",
        heading: "K2D, Georgia, serif",
        mono: "K2D, Menlo, monospace",
    },
    colors: {
        palette: {
            main: "#a31f34",
            secondary: "#f6b221",
            footer: "#555759",
            body1: "#f3f3f3",
            body2: "#8a8c8c",
            body3: "#faf4f5",
            container: "#FFFFFF"
        },
        menu: {
            50: "#D1E7D8",
            100: "#B3D7C4",
            200: "#95C6B6",
            300: "#78B4AC",
            400: "#5B9FA3",
            500: "#3E7D91",
            600: "#22577E",
            700: "#1C3B70",
            800: "#172261",
            900: "#161252",
        }
    },
})