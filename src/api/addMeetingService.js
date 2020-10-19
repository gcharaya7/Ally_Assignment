import FetchApiResponse from "./apiService";
import { API_METHODS, API_BASE_URL } from "../constants";

export const saveMeeting = async (meetingData) => {
  const reqDetails = {
    method: API_METHODS.POST_METHOD,
    url: API_BASE_URL,
    data: {
      query: `mutation { Meeting(
                 id: ${meetingData.id}
                 title: "${meetingData.title}"
                 date: "${meetingData.date}"
                 startTime: "${meetingData.startTime}"
                 endTime: "${meetingData.endTime}"
                    meetingRoomId: ${meetingData.meetingRoomId}) {
                    id
                    title
                    }
               }`,
    },
  };
  const responseBody = await FetchApiResponse(reqDetails);
  return responseBody;
};
