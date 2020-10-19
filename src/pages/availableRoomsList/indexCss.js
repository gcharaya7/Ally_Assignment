import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
    marginBottom: 20,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(2),
  },
  btnContainer: {
    textAlign: "right",
  },

  roomRow: {
    position: "relative",
    border: "solid 1px #dddddd",
    padding: "10px 0",
    margin: "10px 0",
    borderRadius: 4,
    cursor: "pointer",
  },
  buildingName: {
    position: "absolute",
    right: 10,
    top: -10,
    background: "#ffffff",
    padding: "3px 10px",
    fontSize: 12,
    borderRadius: 4,
    border: "solid 1px #dddddd",
  },
}));

export default useStyles;
