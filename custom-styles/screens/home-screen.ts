import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  container: {
    flex: 1,
    flexGrow: 1,
    maxWidth: 1200,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
  },

  heading: {

  },

  purposes: {
    flex: 1,
    padding: 25
  },

  swapIcon: {
    color: theme.palette.text.secondary,
    fontSize: 30
  },

});