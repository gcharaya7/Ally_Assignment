import FetchApiResponse from "./apiService";
import { API_METHODS, API_BASE_URL } from "../constants";

export const getLandingData = async () => {
  const reqDetails = {
    method: API_METHODS.GET_METHOD,
    url: API_BASE_URL,
  };
  const responseBody = await FetchApiResponse(reqDetails);
  return responseBody;
};
