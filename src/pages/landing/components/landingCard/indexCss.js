import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "left",
    borderRadius: 8,
    height: 150,
  },
  cardHeader: {
    background: "#3f7db5",
    padding: "10px 16px",
    color: "#ffffff",
    fontWeight: "bold",
    "& span": {
      fontSize: 20,
    },
  },
  cardContent: {
    padding: "7px 16px 10px 16px",
    "&:last-child": {
      paddingBottom: 10,
    },
  },
}));

export default useStyles;
