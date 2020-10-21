import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {},

  appBar: {},

  toolBar: {
    width: "100%"
  },

  homeButton: {
    color: theme.palette.common.white,
    textTransform: "initial",
    fontWeight: "bold"
  },

  toolBarDesktopContent: {
    width: "100%"
  },

  toolBarMobileContent: {
    marginLeft: "auto"
  },

  desktopList: {
    display: "flex"
  },

  mobileList: {},

  menuItem: {
    "&:nth-of-type(3)": {
      marginLeft: "auto"
    }
  },

  mobileMenuButton: {
    marginLeft: "auto",
    color: theme.palette.common.white
  }

});
