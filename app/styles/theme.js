import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: "K2D, system-ui, sans-serif",
        heading: "K2D, Georgia, serif",
        mono: "K2D, Menlo, monospace",
    },
    colors: {
        palette: {
            // main: "#a31f34",
            main: "#BD051E",
            secondary: "#f6b221",
            footer: "#555759",
            body1: "#f3f3f3",
            body2: "#8a8c8c",
            body3: "#faf4f5",
            container: "#FFFFFF",
            cojblue:"#001871",
        },
        // menu: {
        //     50: "#FFFFE3",
        //     100: "#FFFECA",
        //     200: "#FFFAB1",
        //     300: "#FFF498",
        //     400: "#FFED7E",
        //     500: "#FFE365",
        //     600: "#FFD94D",
        //     700: "#FFCD3C",
        //     800: "#FFC02D",
        //     900: "#F6B221",
        // }
        menu: {
            50: "#FFE700",
            100: "#FFE000",
            200: "#FFDA00",
            300: "#FFD300",
            400: "#FFCD00",
            500: "#FFC700",
            600: "#FFC201",
            700: "#FFBC0C",
            800: "#FFB716",
            900: "#F6B221",
        }
    },
})