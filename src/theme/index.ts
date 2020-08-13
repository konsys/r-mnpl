import { grey, purple, red, teal } from "@material-ui/core/colors";

import { createMuiTheme } from "@material-ui/core";

export enum BLOCK_SIZE {
  xl = "xl",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}
export enum BREAK_SIZES {
  xs = "0",
  sm = "600",
  md = "960",
  lg = "1280",
  xl = "1920",
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: purple[500],
    },
    text: {
      primary: grey[600],
      secondary: grey[500],
      disabled: grey[300],
    },
    error: {
      main: red[500],
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
});
