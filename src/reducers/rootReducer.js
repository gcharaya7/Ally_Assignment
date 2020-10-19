import { combineReducers } from "redux";
import landingReducer from "./landing";
import availableRoomsListReducer from "./availableRoomsList";

export default combineReducers({
  landingReducer,
  availableRoomsListReducer,
});
