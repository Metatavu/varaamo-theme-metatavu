import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  root: { },

  appBar: { 
    position: "fixed",
    top: 64,
    justifyContent: "center"
  },

  toolBar: { 
    backgroundColor: theme.palette.primary.main
  },

  homeButton: {
    fontSize: 16
  },

  toolBarDesktopContent: { },

  toolBarMobileContent: { },

  desktopList: { },

  mobileList: { },

  menuItem: {
    textTransform: "initial",
    fontWeight: "bold"
  },

  mobileMenuButton: { }

});
