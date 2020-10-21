import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  root: {
    backgroundColor: theme.palette.primary.main,
    minHeight: 200,
    width: "100%"
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 25,
    paddingBottom: 25
  },

  grid: {

  },

  firstColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.common.white
  },

  logo: {
    width: "25%"
  },

  appTitleText: {
    width: "25%"
  },

  secondColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    fontSize: "1.2rem"
  },

  thirdColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    color: theme.palette.common.white
  },

});