import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    overflowX: "hidden"
  },

  content: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: theme.palette.secondary.main
  }

});