import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { getAvaiableRooms } from "./helper";
import useStyles from "./indexCss";

const AddMeeting = (props) => {
  const { buildings } = props;
  const [state, setState] = React.useState({
    title: "",
    selectedDate: null,
    startTime: "",
    endTime: "",
    building: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const onNextPressed = () => {
    const { selectedDate, startTime, endTime, building } = state;
    if (selectedDate && startTime && endTime && building) {
      const availableRooms = getAvaiableRooms(state, buildings);
      props.history.push("/availableRoomsList", {
        availableRooms,
        meetingData: { ...state },
        building,
      });
    }
  };

  const onCancel = () => {
    props.history.goBack();
  };

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid item xs={12} md={8}>
        <Card>
          <form className={classes.addMeetingForm}>
            <CardHeader title="Add Meeting" className={classes.cardHeader} />
            <CardContent className={classes.cardContent}>
              <TextField
                type="text"
                label="Title"
                fullWidth={true}
                value={state.title}
                inputProps={{
                  name: "title",
                  id: "title",
                }}
                onChange={(e) => handleChange(e)}
                className={classes.fullWidth}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                type="date"
                label="Date"
                fullWidth={true}
                value={state.selectedDate}
                inputProps={{
                  name: "selectedDate",
                  id: "date",
                }}
                onChange={(e) => handleChange(e)}
                format={"DD/MM/YYYY"}
                className={classes.fullWidth}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                type="time"
                fullWidth={true}
                label="Start Time"
                value={state.startTime}
                className={classes.fullWidth}
                onChange={(e) => handleChange(e)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900, // 5 min
                  name: "startTime",
                  id: "startTime",
                }}
                variant="outlined"
              />
              <TextField
                type="time"
                fullWidth={true}
                label="End Time"
                value={state.endTime}
                className={classes.fullWidth}
                onChange={(e) => handleChange(e)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900, // 5 min
                  name: "endTime",
                  id: "endTime",
                }}
                variant="outlined"
              />
              {buildings && (
                <TextField
                  variant="outlined"
                  inputProps={{
                    name: "building",
                    id: "building",
                  }}
                  fullWidth={true}
                  value={state.building}
                  select
                  label="Building"
                  onChange={(e) => handleChange(e)}
                  onChange={handleChange}
                >
                  {buildings.map((building) => {
                    return (
                      <MenuItem key={building.id} value={building.name}>
                        {building.name}
                      </MenuItem>
                    );
                  })}
                </TextField>
              )}
              <div className={classes.btnContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={onCancel}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onNextPressed}
                >
                  Choose Room
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { buildings, rooms } = state.landingReducer;
  return { buildings, rooms };
};

export default withRouter(connect(mapStateToProps, null)(AddMeeting));
