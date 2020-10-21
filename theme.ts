import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({

  palette: {
    primary: {
      main: "#EA5B0C"
    },
    secondary: {
      main: "#575757"
    },
    background: {
      default: "#FFFFFF",
      paper: "#F7F9FC"
    },
    success: {
      main: "#61C88D"
    },
    error: {
      main: "#E25353"
    },
    text: {
      primary: "#252729",
      disabled: "#C2C9CF"
    },
    grey: {
      "100": "#252729",
      "200": "#51575C",
      "400": "#939BA3",
      "600": "#C2C9CF",
      "700": "#DCE2E9",
      "800": "#F7F9FC",
      "900": "#FEFEFF"
    },
    info: {
      main: "#7BD4F0"
    },
    warning: {
      main: "#F6D46C"
    }
  },

  typography: {},

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "::-webkit-scrollbar-track": {},
        "::-webkit-scrollbar": {},
        "::-webkit-scrollbar-thumb": {}
      }
    }
  }
});
