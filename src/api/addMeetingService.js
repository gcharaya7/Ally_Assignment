import FetchApiResponse from "./apiService";
import { API_METHODS, API_BASE_URL } from "../constants";

/**
 * Function to save meeting to the backend with given meeting data
 * @param meetingData object containing all meeting related information
 * @returns response object with newly created meeting id and title
 */
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
