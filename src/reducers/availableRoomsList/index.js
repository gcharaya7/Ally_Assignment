import { UPDATE_MEETING_SAVE_STATUS } from "../../actions/availableRoomsList/actionConstants";
import { API_CALL_STATUS } from "../../constants";

const initialState = {
  meetingSaveStatus: API_CALL_STATUS.DEFAULT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MEETING_SAVE_STATUS:
      return {
        ...state,
        meetingSaveStatus: action.meetingSaveStatus,
      };
    default:
      return state;
  }
};
