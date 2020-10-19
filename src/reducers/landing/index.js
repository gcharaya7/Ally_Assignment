import {
  SAVE_ROOM_DATA,
  UPDATE_DATA_LOAD_STATUS,
} from "../../actions/landing/actionConstants";
import { API_CALL_STATUS } from "../../constants";

const initialState = {
  buildings: [],
  rooms: {},
  meetings: {},
  dataLoadStatus: API_CALL_STATUS.DEFAULT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ROOM_DATA:
      return {
        ...state,
        buildings: action.buildings,
        rooms: action.rooms,
        meetings: action.meetings,
      };
    case UPDATE_DATA_LOAD_STATUS:
      return {
        ...state,
        dataLoadStatus: action.dataLoadStatus,
      };
    default:
      return state;
  }
};
