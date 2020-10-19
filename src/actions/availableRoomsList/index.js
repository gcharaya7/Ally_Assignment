import { saveMeeting } from "../../api/addMeetingService";
import { UPDATE_MEETING_SAVE_STATUS } from "./actionConstants";
import { API_CALL_STATUS } from "../../constants";

export const saveNewMeeting = (meetingData, successCallback) => async (
  dispatch
) => {
  dispatch({
    type: UPDATE_MEETING_SAVE_STATUS,
    meetingSaveStatus: API_CALL_STATUS.INPROGRESS,
  });

  const newMeeting = await saveMeeting(meetingData);
  if (newMeeting?.data?.Meeting?.id) {
    dispatch({
      type: UPDATE_MEETING_SAVE_STATUS,
      meetingSaveStatus: API_CALL_STATUS.SUCCESS,
    });
    successCallback();
  }
};
