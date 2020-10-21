import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 25
  },

  datepicker: {
    width: 500,
    fontSize: 30,
    border: "none",
    textAlign: "center",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      width: 250,
      fontSize: 15,
    }
  },

  arrowIcon: {
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    }
  }

});