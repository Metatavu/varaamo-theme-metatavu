import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export const styles = createStyles({

  root: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("")`,
  },

  banner: {
    width: "60%",
    height: 250,
    padding: 25,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },

  bannerHeading: {
    fontWeight: 800
  },

  bannerDescription: {

  },

});

