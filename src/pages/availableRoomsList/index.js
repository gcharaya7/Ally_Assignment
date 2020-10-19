import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { saveNewMeeting } from "../../actions/availableRoomsList";
import { formatDateDDMMYYY } from "../../utils/CommonUtils";
import RoomsList from "./components/RoomsList";
import ButtonContainer from "./components/ButtonContainer";
import useStyles from "./indexCss";
import { PAGE_TITLE } from "./constants";

const MeetingList = (props) => {
  const classes = useStyles();
  const {
    availableRooms,
    building,
    meetingData,
    saveNewMeeting,
    meetingSaveStatus,
  } = props;

  const [selectedRoom, setSelectedRoom] = useState(null);

  const onMeetingRoomSelected = (event) => {
    setSelectedRoom(parseInt(event.target.value));
  };

  const onMeetingSave = () => {
    const newMeeting = {
      id: Math.floor(Math.random() * 10000),
      title: meetingData.title,
      date: formatDateDDMMYYY(meetingData.selectedDate),
      startTime: meetingData.startTime,
      endTime: meetingData.endTime,
      meetingRoomId: selectedRoom,
    };

    const successCallback = () => {
      props.history.push("/");
    };
    saveNewMeeting(newMeeting, successCallback);
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader title={PAGE_TITLE} />
          <CardContent>
            <RoomsList
              selectedBuilding={building}
              availableRooms={availableRooms}
              selectedRoom={selectedRoom}
              onMeetingRoomSelected={onMeetingRoomSelected}
            />
            <ButtonContainer
              onMeetingSave={onMeetingSave}
              meetingSaveStatus={meetingSaveStatus}
            />
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { availableRooms, building, meetingData } =
    ownProps?.location?.state || {};
  const { meetingSaveStatus } = state.availableRoomsListReducer;
  return {
    availableRooms,
    building,
    meetingData,
    meetingSaveStatus,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveNewMeeting: (meetingData, successCallback) =>
    dispatch(saveNewMeeting(meetingData, successCallback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList);
