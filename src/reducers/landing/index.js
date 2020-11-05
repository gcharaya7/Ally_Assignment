import {
  UPDATE_LANDING_DATA,
  UPDATE_DATA_LOAD_STATUS,
} from "../../actions/landing/actionConstants";
import { API_CALL_STATUS } from "../../constants";

const initialState = {
  landingData: [],
  dataLoadStatus: API_CALL_STATUS.DEFAULT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LANDING_DATA:
      return {
        ...state,
        landingData: action.landingData,
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
