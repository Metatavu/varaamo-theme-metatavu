import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {
    padding: 25
  },

  headerContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    minHeight: 70,
    color: "#ffffff"
  },

  timeText: {
    paddingLeft: 10
  },

  reservationText: {
    marginLeft: "50%"
  },

});