import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

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

const LandingCard = (props) => {
  const classes = useStyles();
  const { cardData } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.card}>
        <CardHeader title={cardData.cardTitle} className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
          {props.cardData.cardContent.map((item) => {
            return (
              <p key={`${item.label}: ${item.value}`}>
                {item.label}: {item.value}
              </p>
            );
          })}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LandingCard;
