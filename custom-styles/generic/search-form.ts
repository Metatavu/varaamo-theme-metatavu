import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {
    display: "flex",
    flexDirection: "column",
  },

  formRow: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },

  formColumn: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flex: 1
    }
  },

  formDivider: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  formSubmit: {
    flex: 1,
    margin: 25,
    display: "flex",
    justifyContent: "center"
  },

  searchButton: {
    width: 650,
    height: 60,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.main
  },

});