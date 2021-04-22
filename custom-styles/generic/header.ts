import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  root: { 
    backgroundColor: theme.palette.secondary.main,
  },

  appBar: { 
    position: "fixed",
    top: 0,
    height: 64,
    justifyContent: "center"
  },

  toolBar: { },

  logo: {
    height: 28
  },

  select: { },

  menuItem: { },

  button: { 
    border: 1,
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    borderStyle: "solid",
    borderRadius: 0,
    paddingInline: theme.spacing(2)
  },

});