import { createTheme } from "@kuma-ui/core";
import colors from "tailwindcss/colors";

const theme = createTheme({
  colors: {
    keyColor: colors.pink,
  },
  spacings: {
  },
  breakpoints: {
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme { }
}

export default theme;