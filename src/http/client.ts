import axios, { AxiosError } from "axios";
import { config } from "./config";
import { getToken } from "../components/core/Login/model/LoginModel";
export const client = axios.create({
  baseURL: config.baseURL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

client.interceptors.response.use(undefined, onError);

async function onError(e: AxiosError) {}
