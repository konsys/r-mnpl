import axios, { AxiosError } from "axios";
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
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log(23424234423);
    }
    return error;
  }
);

async function onError(e: AxiosError) {
  console.error("Axios error", e);
}
