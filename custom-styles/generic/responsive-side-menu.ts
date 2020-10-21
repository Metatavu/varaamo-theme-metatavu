import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {
    [theme.breakpoints.up("md")]: {
      minWidth: 280,
      width: 280
    }
  },

  drawerContent: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    minWidth: 280
  },

  logoArea: {
    height: 200,
    padding: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },

  logo: {
    width: "90%"
  },

  logoTextArea: {
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
  },

  logoText: {
    textTransform: "uppercase",
    fontSize: 26,
    fontWeight: "bold",
    color: theme.palette.common.white
  },

  menu: {
    height: "calc(100% - 150px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },

  menuItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: theme.palette.common.white
  }

});