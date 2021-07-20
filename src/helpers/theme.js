import { createMuiTheme } from "@material-ui/core/styles";
import { grey, blueGrey } from "@material-ui/core/colors";

export const Breakpoints = {
  ExtraSmall: 0,
  Small: 420,
  Medium: 790,
  Large: 992,
  ExtraLarge: 1200,
};

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: Breakpoints.ExtraSmall,
      sm: Breakpoints.Small,
      md: Breakpoints.Medium,
      lg: Breakpoints.Large,
      xl: Breakpoints.ExtraLarge,
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontWeightRegular: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "2.9em",
      fontFamily: "Lato",
    },
    h2: {
      fontSize: "2em",
      padding: "15px 0",
      fontFamily: "Lato",
    },
    h3: {
      fontSize: "1.75em",
      fontWeight: 700,
      fontFamily: "Lato",
    },
    h4: {
      fontFamily: "Lato",
    },
    h5: {
      fontFamily: "Lato",
    },
    h6: {
      fontFamily: "Lato",
    },
  },
  palette: {
    primary: {
      main: blueGrey[500],
      dark: "rgb(35, 48, 68)",
    },
    secondary: {
      main: grey[50],
    },
  },
  overrides: {
    MuiTableRow: {
      root: {
        "&:hover": {
          backgroundColor: grey[100],
          cursor: "pointer",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: `${grey[100]} !important`,
        opacity: 0.6,
      },
    },
    MuiLink: {
      root: {
        cursor: "pointer",
      },
    },
  },
});
