import { grey, red } from "@material-ui/core/colors";

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

export const GRID_SPACING = 3;
export const BLOCK_SPACING = 6;
export const BOX_MARGIN = 3;
export const BOX_PADDING = 3;

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans", "Tahoma", "Arial", "sans-serif"].join(","),

    fontSize: 14,
    h6: { fontWeight: 600, fontSize: 19, color: "#757575" },
    body1: {
      color: "#656d78",
    },
    body2: {
      color: "#a7adb5",
    },
    overline: {
      color: "white",
    },
  },
  palette: {
    primary: {
      main: "#8cc152",
    },
    secondary: {
      main: "#f6bb43",
    },
    grey: { A100: red[500] },
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
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
});
