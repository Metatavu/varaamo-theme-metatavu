
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
    marginTop: 25,
    marginBottom: 25,
    marginLeft: "auto",
    marginRight: "auto"
  },

});