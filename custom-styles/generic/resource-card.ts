import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  container: {
    backgroundColor: "#757575",
    marginTop: 25,
    marginBottom: 25,
  },

  card: {
    height: "auto"
  },

  cardContent: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },

  cardImageContainer: {
    flex: 1,
    padding: 10,
  },

  cardText: {
    flex: 2,
    padding: 10,
    display: "flex",
    flexDirection: "column"
  },

  cardDetails: {
    flex: 1,
    padding: 10,
    display: "flex",
    flexDirection: "column"
  },

  cardName: {

  },

  cardDescription: {

  },

});
