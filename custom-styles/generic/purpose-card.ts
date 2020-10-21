import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  container: {
    width: "22%",
    textAlign: "center",
    backgroundColor: "#757575",
    borderRadius: "50px 50px 50px 50px",
    marginTop: 25,
    marginBottom: 25,
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "47%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "97%",
    }
  },

  card: {
    borderRadius: "50px 50px 50px 50px",
  },

  cardContent: {

  },

  cardName: {
    fontSize: 15,
  },

  link: {
    textDecoration: "none"
  },

});
