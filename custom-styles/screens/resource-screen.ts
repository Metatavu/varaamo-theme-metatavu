
import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  container: { },

  reservationContainer: { },

  datePickerContainer: { },

  dateListContainer: { },

  cancelButton: {
    backgroundColor: theme.palette.primary.main
  },

  reserveButton: {
    backgroundColor: theme.palette.secondary.main
  },

  selected: {
    height: 48,
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },

});