import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import configureStore from "./store";

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: "#ffffff",
    backgroundColor: "#407eb4",
    "& .MuiToolbar-root": {
      justifyContent: "center",
      fontSize: 24,
    },
  },
}));

const Landing = Loadable({
  loader: () => import(/* webpackChunkName: "Landing" */ "./pages/Landing"),
  loading: () => null,
});

const AddMeetingForm = Loadable({
  loader: () =>
    import(/* webpackChunkName: "AddMeetingForm" */ "./pages/AddMeetingForm"),
  loading: () => null,
});

const AvailableRoomsList = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "AvailableRoomsList" */ "./pages/AvailableRoomsList"
    ),
  loading: () => null,
});

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={configureStore()}>
      <Router>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>Meeting Room Finder</Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" key="landing" component={Landing} exact={true} />
          <Route
            path="/addMeeting"
            key="addMeeting"
            component={AddMeetingForm}
            exact={true}
          />
          <Route
            path="/availableRoomsList"
            key="meetingList"
            component={AvailableRoomsList}
            exact={true}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
