
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
    backgroundColor: theme.palette.background.default,
    maxWidth: 1200
  },

  reservationContainer: {
    display: "flex"
  },

  datePickerContainer: {
    flexGrow: 1,
    maxWidth: "50%"
  },

  dateListContainer: {
    flexGrow: 1,
    maxWidth: "50%"
  },

  reserveButton: {
    
  }

});