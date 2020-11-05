// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
//
// import Container from "@material-ui/core/Container";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { loadLandingData } from "../../actions/landing";
// import { API_CALL_STATUS } from "../../constants";
// import { getLandingCardsData } from "./helper";
// import CardsView from "./components/cardsView";

// const LandingPage = (props) => {
//   const classes = useStyles();
//   const { cardsData, loadLandingData, dataLoadStatus } = props;

//   const isLoadingStyle =
//     dataLoadStatus === API_CALL_STATUS.INPROGRESS ? classes.isLoading : "";

//   return (
//     <Container
//       maxWidth="md"
//       className={`${classes.container} ${isLoadingStyle}`}
//     >
//       {dataLoadStatus === API_CALL_STATUS.SUCCESS && cardsData?.length && (
//         <CardsView cardsData={cardsData} />
//       )}
//       {dataLoadStatus === API_CALL_STATUS.ERROR && <p>Something went wrong</p>}
//       {dataLoadStatus === API_CALL_STATUS.INPROGRESS && <CircularProgress />}
//     </Container>
//   );
// };

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import { loadLandingData } from "../../actions/landing";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { API_CALL_STATUS } from "../../constants";
import useStyles from "./indexCss";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

const LandingPage = (props) => {
  const classes = useStyles();
  const { landingData, loadLandingData, dataLoadStatus } = props;
  const [open, setOpen] = React.useState({});

  useEffect(() => {
    loadLandingData();
  }, []);

  useEffect(() => {
    console.log("useEffect", open);
  });

  const handleClick = (id) => {
    console.log("handleClick", !open[id]);
    open[id] = !open[id];
    setOpen({ ...open });
  };

  const isLoadingStyle =
    dataLoadStatus === API_CALL_STATUS.INPROGRESS ? classes.isLoading : "";

  return (
    <Container
      maxWidth="md"
      className={`${classes.container} ${isLoadingStyle}`}
    >
      {dataLoadStatus === API_CALL_STATUS.SUCCESS && landingData?.length && (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {landingData.map((item) => (
            <>
              <ListItem button onClick={() => handleClick(item.id)}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {open[item.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={!!open[item.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.childern && item.childern.length
                    ? item.childern.map((child) => (
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary={child.title} />
                        </ListItem>
                      ))
                    : null}
                </List>
              </Collapse>
            </>
          ))}
        </List>
      )}
      {dataLoadStatus === API_CALL_STATUS.ERROR && <p>Something went wrong</p>}
      {dataLoadStatus === API_CALL_STATUS.INPROGRESS && <CircularProgress />}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { landingData, dataLoadStatus } = state.landingReducer;
  return { landingData, dataLoadStatus };
};

const mapDispatchToProps = (dispatch) => ({
  loadLandingData: () => dispatch(loadLandingData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
