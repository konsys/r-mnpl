import { createDomain } from "effector";
import { loginFetch, userFetch } from "./api";
import { ILoginForm, ILoginResponce } from "../Login";
import { LocalStorageParams, IUser } from "../../../../types/types";

const AuthDomain = createDomain("AuthDomain");
const clearTokenStore = AuthDomain.event();

export const getUserEffect = AuthDomain.effect<string, IUser, Error>({
  handler: userFetch,
});

export const loginEffect = AuthDomain.effect<ILoginForm, ILoginResponce, Error>(
  {
    handler: loginFetch,
  }
);

export const LoginStore = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginEffect.pending, () =>
    localStorage.setItem(LocalStorageParams.TOKEN, "")
  )
  .on(loginEffect.done, (_, data) => {
    localStorage.setItem(LocalStorageParams.TOKEN, data.result.access_token);

    return data.result;
  })
  .on(loginEffect.fail, (err) =>
    localStorage.setItem(LocalStorageParams.TOKEN, "")
  )
  .reset(clearTokenStore);

LoginStore.updates.watch((v) => {
  v?.access_token && getUserEffect("me");
});

export const getToken = (): string => {
  const storeToken = LoginStore.getState();
  const storage = localStorage.getItem(LocalStorageParams.TOKEN);
  return storeToken && storeToken.access_token
    ? storeToken.access_token
    : storage
    ? storage
    : "";
};

export const clearToken = () => {
  localStorage.setItem(LocalStorageParams.TOKEN, "");
  clearTokenStore();
};
// LoginStore.updates.watch((v) => console.log("LoginStoreWatch", v));
