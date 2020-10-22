import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./indexCss";

const LandingCard = (props) => {
  const classes = useStyles();
  const { cardData } = props;
  const { cardTitle, cardContent } = cardData || {};

  if (!cardTitle || !cardContent) {
    return null;
  }
  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.card}>
        <CardHeader title={cardTitle} className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
          {cardContent.map((item) => {
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

LandingCard.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default LandingCard;
