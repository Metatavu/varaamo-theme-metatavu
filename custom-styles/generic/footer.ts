import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  root: { 
    backgroundColor: theme.palette.primary.main,
    minHeight:0
  },

  container: { },

  grid: { },

  firstColumn: { },

  logo: { },

  appTitleText: {
    textAlign: "center",
    width: "100%",
    fontSize: "1.3rem"
  },

  secondColumn: {
    textAlign: "center"
  },

  thirdColumn: {
    justifyContent: "center"
  },

});