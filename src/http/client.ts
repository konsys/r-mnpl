import axios, { AxiosError, AxiosResponse } from "axios";
import { config } from "./config";
import { getToken } from "../components/core/Login/model/TokenModel";

export const client = axios.create({
  baseURL: config.baseURL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

client.interceptors.request.use((config) => {
  const token = `Bearer ${getToken()}`;
  config.headers.Authorization = token;

  return config;
}, onError);

client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      console.log(error.response);
      // <Redirect to="/game" />;
    }
    return error;
  }
);

async function onError(e: AxiosError) {
  console.error("Axios error", e);
}
