import { LocalStorageParams } from "../../../../types/types";
import { LoginStore, clearTokenStore } from "./LoginModel";

export const getToken = (): string | null => {
  const storeToken = LoginStore.getState();
  const storage = localStorage.getItem(LocalStorageParams.TOKEN);
  return storeToken && storeToken.access_token
    ? storeToken.access_token
    : storage
    ? storage
    : null;
};

export const saveToken = (token: string): void | null => {
  console.log("saveToken", token);
  localStorage.setItem(LocalStorageParams.TOKEN, token);
};

export const clearToken = () => {
  localStorage.removeItem(LocalStorageParams.TOKEN);
  clearTokenStore();
};
