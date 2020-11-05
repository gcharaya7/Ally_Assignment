import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    boxSizing: "border-box",
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  isLoading: {
    alignItems: "center",
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    marginTop: 0,
  },
  nested: {
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(5),
    },
  },
}));

export default useStyles;
