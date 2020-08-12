import { purple, teal } from "@material-ui/core/colors";

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
  },
});
