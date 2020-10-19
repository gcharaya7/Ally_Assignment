import axios, { AxiosRequestConfig } from "axios";

/**
 * This method is for all the api calls we make throught the application
 * @param {AxiosRequestConfig} config request object
 * @returns The response of api call
 */
export default async function fetchApiResponse(config) {
  try {
    config.headers = {
      token: "6789012345",
      "content-type": "application/json",
    };
    const response = await axios.request(config);
    return response.data;
  } catch (e) {
    (console.error || console.log).call(console, e.stack || e);
    return Promise.resolve(null);
  }
}
