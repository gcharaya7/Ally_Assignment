import FetchApiResponse from "./apiService";
import { API_METHODS, API_BASE_URL } from "../constants";

export const getMeetingData = async () => {
  const reqDetails = {
    method: API_METHODS.POST_METHOD,
    url: API_BASE_URL,
    data: {
      query:
        "{ Buildings { name id meetingRooms{ name id floor meetings { id title date startTime endTime }}}}",
    },
  };
  const responseBody = await FetchApiResponse(reqDetails);
  return responseBody;
};
