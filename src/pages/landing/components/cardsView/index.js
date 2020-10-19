import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LandingCard from "../landingCard";
import useStyles from "../../indexCss";

const CardsView = (props) => {
  const classes = useStyles();
  const { cardsData } = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <React.Fragment>
      <Grid container spacing={matches ? 4 : 2}>
        {cardsData.map((item) => (
          <LandingCard cardData={item} key={item.cardTitle} />
        ))}
      </Grid>
      <Button
        component={Link}
        variant="contained"
        color="primary"
        to="/addMeeting"
        size="large"
        className={classes.button}
      >
        Add Meeting
      </Button>
    </React.Fragment>
  );
};

export default CardsView;
