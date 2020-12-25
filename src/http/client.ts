import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import {
  clearToken,
  getRefreshToken,
  getToken,
} from "stores/Game/Token/TokenModel";

import { Params } from "config/params";
import { refreshTokenFx } from "stores/Game/User/UserModel";

export const client: AxiosInstance = axios.create({
  baseURL: Params.BASE_URL,
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
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      clearToken();

      refreshTokenFx(getRefreshToken() || "");
      // <Redirect to="/game" />;
    }
    throw error;
  }
);

async function onError(e: AxiosError) {
  console.error("Axios error", e);
}
