import {
  ILoginForm,
  ILoginResponce,
} from "../../../components/core/Registration/Login/Login";

import { LocalStorageParams } from "types/types";
import { createDomain } from "effector";
import { getMyProfile } from "../User/UserModel";
import { loginFetch } from "api/Login/api";
import { saveToken } from "../Token/TokenModel";

const AuthDomain = createDomain("AuthDomain");
export const clearTokenStore = AuthDomain.event();
export const clearToken = AuthDomain.event();

export const loginFx = AuthDomain.effect<ILoginForm, ILoginResponce, Error>({
  handler: loginFetch,
});

export const login$ = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginFx.pending, () => localStorage.setItem(LocalStorageParams.TOKEN, ""))
  .on(loginFx.done, (_, data) => {
    clearToken();
    data.result &&
      data.result.access_token &&
      saveToken(data.result.access_token);
    data.result.access_token && getMyProfile();
    return data.result;
  })
  .on(loginFx.fail, (err) => localStorage.removeItem(LocalStorageParams.TOKEN))
  .reset(clearTokenStore);

// login$.updates.watch((v) => console.log("LoginStoreWatch", v));
