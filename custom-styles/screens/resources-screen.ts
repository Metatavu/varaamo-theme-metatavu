import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  container: {
    flex: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1200,
    padding: 5,
    paddingBottom: 25,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    }
  },

});
