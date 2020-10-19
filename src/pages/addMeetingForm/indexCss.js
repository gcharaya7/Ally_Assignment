import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    marginBottom: 20,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  addMeetingForm: {
    textAlign: "left",
  },
  button: {
    margin: theme.spacing(2),
  },
  btnContainer: {
    textAlign: "right",
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 10,
    },
  },
}));

export default useStyles;
