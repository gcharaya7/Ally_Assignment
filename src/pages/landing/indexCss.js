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
  button: {
    backgroundColor: "#33a852",
    marginTop: 60,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      borderRadius: 0,
      padding: 10,
    },
  },
}));

export default useStyles;
