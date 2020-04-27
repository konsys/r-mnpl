import axios, { AxiosError, AxiosResponse } from "axios";
import { config } from "./config";
import { restError, RestErrorCodes } from "./errors.rest";
import { Auth, authTokenName } from "./auth.service";
let REFRESH_REQ: Promise<any> | null;

export const client = axios.create({
  baseURL: config.baseURL,
});

client.interceptors.response.use(undefined, onError);

async function onError(e: AxiosError): Promise<AxiosResponse<any>> {
  const error = await restError(e);
  const { status, code } = error;

  switch (status) {
    case 401:
      if (code === RestErrorCodes.accessTokenExpired) {
        if (
          e.config.headers[authTokenName] !==
          client.defaults.headers[authTokenName]
        ) {
          e.config.headers[authTokenName] =
            client.defaults.headers[authTokenName];
          return client.request(e.config);
        }

        try {
          if (!REFRESH_REQ) {
            REFRESH_REQ = Auth.refreshAccessToken();
          }

          const token = await REFRESH_REQ;

          if (token) {
            e.config.headers[authTokenName] = `Bearer ${token}`;
          }
          REFRESH_REQ = null;

          return client.request(e.config);
        } catch (e) {
          REFRESH_REQ = null;
        }
      }
      if (code === RestErrorCodes.notAuthenticated) {
        // TODO logout
      }
      break;
  }
  if (e.code === "ECONNABORTED") {
    error.message = "Превышено время ожидания ответа от сервера";
  }
  if (error.message === "Network Error") {
    error.message = "Отсутствует подключение к сети";
  }
  throw error;
}
