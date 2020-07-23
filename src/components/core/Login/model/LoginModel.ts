import { ILoginForm, ILoginResponce } from "../Login";
import { clearToken, saveToken } from "./TokenModel";

import { LocalStorageParams } from "../../../../types/types";
import { createDomain } from "effector";
import { getUserEffect } from "../../../../stores/UserStore";
import { loginFetch } from "../../../../models/api/Login/api";

const AuthDomain = createDomain("AuthDomain");
export const clearTokenStore = AuthDomain.event();

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
    clearToken();
    data.result && saveToken(data.result.access_token);
    data.result.access_token && getUserEffect("me");
    return data.result;
  })
  .on(loginEffect.fail, (err) =>
    localStorage.setItem(LocalStorageParams.TOKEN, "")
  )
  .reset(clearTokenStore);

// LoginStore.updates.watch((v) => console.log("LoginStoreWatch", v));
