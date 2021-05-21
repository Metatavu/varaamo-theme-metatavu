import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  container: { },

  heading: { 
    fontSize: "2rem",
    fontWeight: 100
  },

  purposes: {
    textAlign: "center",
    margin: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
  },

  swapIcon: { },

});