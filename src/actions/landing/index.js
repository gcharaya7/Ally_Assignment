import { getLandingData } from "../../api/landingService";
import {
  UPDATE_LANDING_DATA,
  UPDATE_DATA_LOAD_STATUS,
} from "./actionConstants";
import { API_CALL_STATUS } from "../../constants";

export const loadLandingData = () => async (dispatch, _getState) => {
  dispatch({
    type: UPDATE_DATA_LOAD_STATUS,
    dataLoadStatus: API_CALL_STATUS.INPROGRESS,
  });
  const landingData = await getLandingData();
  const list = [];
  landingData.data.forEach((item) => {
    if (!item.parent_objective_id) {
      list.push(item);
    } else {
      let index = list.findIndex(
        (listItem) => listItem.id === item.parent_objective_id
      );
      if (index !== -1) {
        if (!list[index]["childern"]) {
          list[index]["childern"] = [];
        }
        list[index]["childern"].push(item);
      }
    }
  });

  dispatch({
    type: UPDATE_LANDING_DATA,
    landingData: list,
  });
  dispatch({
    type: UPDATE_DATA_LOAD_STATUS,
    dataLoadStatus: API_CALL_STATUS.SUCCESS,
  });
};
