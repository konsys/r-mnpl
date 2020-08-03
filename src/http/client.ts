import axios, { AxiosError, AxiosResponse } from "axios";
import {
  clearToken,
  getToken,
} from "../components/core/Registration/Login/model/TokenModel";

import { config } from "./config";

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
      clearToken();
      console.log(error.response);
      // <Redirect to="/game" />;
    }
    return error;
  }
);

async function onError(e: AxiosError) {
  console.error("Axios error", e);
}
