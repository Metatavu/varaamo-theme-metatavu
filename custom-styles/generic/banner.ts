import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  root: { },

  banner: { },

  bannerHeading: { 
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: 100,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2)
  },

  bannerDescription: {
    textAlign: "center"
  },

});

