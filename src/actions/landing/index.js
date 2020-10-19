import { getMeetingData } from "../../api/landingService";
import { SAVE_ROOM_DATA, UPDATE_DATA_LOAD_STATUS } from "./actionConstants";
import { isDateToday, isTimingCurrent } from "../../utils/CommonUtils";
import { API_CALL_STATUS } from "../../constants";

export const loadLandingData = () => async (dispatch, _getState) => {
  dispatch({
    type: UPDATE_DATA_LOAD_STATUS,
    dataLoadStatus: API_CALL_STATUS.INPROGRESS,
  });
  const meetingsData = await getMeetingData();
  const buildings = meetingsData.data.Buildings;
  let totalRooms = 0;
  let totalMeetingsToday = 0;
  let totalMeetingsGoingOn = 0;
  let totalMeetingRoomsFreeNow = 0;
  buildings.forEach((building) => {
    totalRooms += building.meetingRooms.length;
    building.meetingRooms.forEach((meetingRoom) => {
      let roomFreeRightNow = true;
      meetingRoom.meetings.forEach((meeting) => {
        const isMeetingToday = isDateToday(meeting.date);
        const isMeetingAtCurrentTime = isTimingCurrent(
          meeting.startTime,
          meeting.endTime
        );
        if (isMeetingToday) {
          totalMeetingsToday++;
        }
        if (isMeetingToday && isMeetingAtCurrentTime) {
          totalMeetingsGoingOn++;
          roomFreeRightNow = false;
        }
      });
      if (roomFreeRightNow) {
        totalMeetingRoomsFreeNow++;
      }
    });
  });
  dispatch({
    type: SAVE_ROOM_DATA,
    buildings: buildings,
    rooms: {
      total: totalRooms,
      free: totalMeetingRoomsFreeNow,
    },
    meetings: {
      total: totalMeetingsToday,
      goingNow: totalMeetingsGoingOn,
    },
  });
  dispatch({
    type: UPDATE_DATA_LOAD_STATUS,
    dataLoadStatus: API_CALL_STATUS.SUCCESS,
  });
};
