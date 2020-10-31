import { clearTokenStore, login$ } from "../Login/LoginModel";

import { LocalStorageParams } from "../../../types/types";

export const getToken = (): string | null => {
  const storeToken = login$.getState();
  const storage = localStorage.getItem(LocalStorageParams.TOKEN);
  return storeToken && storeToken.access_token
    ? storeToken.access_token
    : storage
    ? storage
    : null;
};

export const saveToken = (token: string): void | null => {
  localStorage.setItem(LocalStorageParams.TOKEN, token);
};

export const clearToken = () => {
  localStorage.removeItem(LocalStorageParams.TOKEN);
  clearTokenStore();
};
