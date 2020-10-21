import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  container: {
    flex: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: 25,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1200,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      padding: 5,
      paddingBottom: 25,
      maxWidth: "100%",
    }
  }

});