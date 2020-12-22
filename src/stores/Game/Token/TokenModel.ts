import { LocalStorageParams } from "types/types";

export const getToken = (): string | null => {
  return localStorage.getItem(LocalStorageParams.TOKEN);
};

export const saveToken = (token: string): void | null => {
  localStorage.setItem(LocalStorageParams.TOKEN, token);
};

export const clearToken = () => {
  localStorage.removeItem(LocalStorageParams.TOKEN);
};
