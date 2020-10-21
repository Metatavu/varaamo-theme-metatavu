import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  container: {
  },

  checkBox: {
    color: theme.palette.primary.main
  },

  timeText: {
    paddingLeft: 10
  },

  reservationText: {
    marginLeft: "50%"
  },

  dataContainer: {
    display: "flex",
    alignItems: "center",
    "& .MuiCheckbox-colorSecondary.Mui-checked" : {
      color: theme.palette.primary.main
    }
  }

});