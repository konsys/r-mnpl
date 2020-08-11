import { green, purple } from "@material-ui/core/colors";

import { createMuiTheme } from "@material-ui/core";

export enum BLOCK_SIZE {
  xl = "xl",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
