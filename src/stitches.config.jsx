import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    letterSpacing: "1.5px",
  },
  body: {
    fontFamily: "Gemunu Libre",
    backgroundColor: "#100f15",
  },
});
