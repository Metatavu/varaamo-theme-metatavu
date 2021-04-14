import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme();

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
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#1e8531",
        "& h2": {
          color: "#242424"
        },
        "& h2.MuiPickersToolbarText-toolbarBtnSelected": {
          color: "#fff"
        }
      }
    },
    MuiPickersTimePickerToolbar: {
      separator: {
        color: "#fff"
      }
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: "#1e8531"
      }
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: "#1e8531"
      },
      thumb: {
        border: "14px solid #1e8531",
        backgroundColor: "#fff"
      },
      noPoint: {
        backgroundColor: "#1e8531"
      }
    },
    MuiPickersClockNumber: {
      clockNumberSelected: {
        color: "#fff"
      }
    },
    MuiPickersToolbarButton: {
      "& h2": {
        color: "#fff"
      }
    },
    MuiPickersCalendar: {
      transitionContainer: {
        minHeight: 350,
        [defaultTheme.breakpoints.down("md")]: {
          minHeight: 250
        },
        [defaultTheme.breakpoints.down("sm")]: {
          minHeight: 350
        },
        [defaultTheme.breakpoints.down("xs")]: {
          minHeight: 225
        }
      }
    },
    MuiPickersCalendarHeader: {
      transitionContainer: {
        height: 28,
        "& p": {
          fontSize: 20,
          fontWeight: 500
        }
      },
      dayLabel: {
        width: 64,
        margin: 0,
        fontSize: 14,
        [defaultTheme.breakpoints.down("md")]: {
          width: 44
        },
        [defaultTheme.breakpoints.down("sm")]: {
          width: 64
        },
        [defaultTheme.breakpoints.down("xs")]: {
          width: 39
        }
      },
      switchHeader: {
        alignItems: "center",
        marginBottom: 30
      },
      iconButton: {
        margin: "0 20px",
        [defaultTheme.breakpoints.down("xs")]: {
          margin: "0 10px"
        }
      }
    },
    MuiPickersDay: {
      day: {
        height: 60,
        width: 60,
        "& p": {
          fontSize: 18
        },
        [defaultTheme.breakpoints.down("md")]: {
          height: 40,
          width: 40
        },
        [defaultTheme.breakpoints.down("sm")]: {
          height: 60,
          width: 60
        },
        [defaultTheme.breakpoints.down("xs")]: {
          height: 35,
          width: 35
        }
      },
      daySelected: {
        backgroundColor: "#EA5B0C",
        color: "#fff"
      }
    },
  }
});
