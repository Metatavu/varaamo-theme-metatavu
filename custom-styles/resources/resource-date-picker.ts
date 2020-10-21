import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {
    padding: 25,
    "& .react-datepicker": {
      width: "100%"
    },
    "& .react-datepicker__navigation": {
      top: 20
    },
    "& .react-datepicker__current-month": {
      height: 50,
      fontSize: 25,
      fontWeight: 500
    },
    "& .react-datepicker__month-container": {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    "& .react-datepicker__month": {
      display: "flex",
      flexWrap: "wrap"
    },
    "& .react-datepicker__week": {
      height: 80,
      display: "flex",
      width: "100%",
      justifyContent: "space-between"
    },
    "& .react-datepicker__day": {
      fontSize: 18,
      flexGrow: 1,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    "& .react-datepicker__day--selected": {
      backgroundColor: theme.palette.primary.main
    },
    "& .react-datepicker__day-names,": {
      width: "100%",
      display: "flex"
    },
    "& .react-datepicker__day-name,": {
      flexGrow: 1,
      fontSize: 18,
      color: theme.palette.secondary.main
    }
  },

  calender: {
    width: "100%",
    fontSize: 30,
    border: "none",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
