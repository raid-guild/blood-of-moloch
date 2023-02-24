import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "320px",
  md: "580px",
  lg: "900px",
  xl: "1075px",
};

export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#0f0f0e",
        color: "white",
      },
    },
  },
  components: {
    Text: {
      textAlign: "left",
    },
  },
  colors: {
    transparent: "transparent",
    blackDark: "rgba(10, 10, 10, 0.960784)",
    blackLight: "#2b2c34",
    blackLighter: "#16161a",
    greyLight: "#a7a9be",
    greyDark: "#4a4a4a",
    white: "#fffffe",
    purple: "#822EA6",
    purpleLight: "#B66AD6",
    red: "#ff3864",
    yellow: "#F2E857",
    yellowDark: "#DCCF11",
  },
  fonts: {
    heading: `'Uncial Antiqua', cursive`,
    text: `'futura-pt','sans-serif'`,
    texturina: `'Texturina', serif`,
    jetbrains: `'JetBrains Mono', monospace`,
    rubik: `'Rubik Mono One', sans-serif`,
    uncial: `'Uncial Antiqua', cursive`,
    spaceMono: `'Space Mono', monospace;`,
    sourceSansPro: `'Source Sans Pro', sans-serif;`,
  },
  breakpoints,
});
