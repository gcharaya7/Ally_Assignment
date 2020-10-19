import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { loadLandingData } from "../../actions/landing";
import { API_CALL_STATUS } from "../../constants";
import { getLandingCardsData } from "./helper";
import CardsView from "./components/cardsView";
import useStyles from "./indexCss";

const LandingPage = (props) => {
  const classes = useStyles();
  const { cardsData, loadLandingData, dataLoadStatus } = props;

  useEffect(() => {
    loadLandingData();
  }, []);

  const isLoadingStyle =
    dataLoadStatus === API_CALL_STATUS.INPROGRESS ? classes.isLoading : "";

  return (
    <Container
      maxWidth="md"
      className={`${classes.container} ${isLoadingStyle}`}
    >
      {dataLoadStatus === API_CALL_STATUS.SUCCESS && cardsData?.length && (
        <CardsView cardsData={cardsData} />
      )}
      {dataLoadStatus === API_CALL_STATUS.INPROGRESS && <CircularProgress />}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { buildings, rooms, meetings, dataLoadStatus } = state.landingReducer;
  const cardsData = getLandingCardsData(buildings, rooms, meetings);
  return { cardsData, dataLoadStatus };
};

const mapDispatchToProps = (dispatch) => ({
  loadLandingData: () => dispatch(loadLandingData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
