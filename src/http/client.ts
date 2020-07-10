import axios, { AxiosError } from "axios";
import { config } from "./config";
import { getToken } from "../components/core/Login/model/LoginModel";

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

async function onError(e: AxiosError) {
  console.error("Axios error", e);
}
