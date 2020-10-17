import { ILoginForm, ILoginResponce } from "../Login";
import { clearToken, saveToken } from "./TokenModel";

import { LocalStorageParams } from "../../../../../types/types";
import { createDomain } from "effector";
import { getMyProfile } from "../../../../../stores/Game/User/UserModel";
import { loginFetch } from "../../../../../api/Login/api";

const AuthDomain = createDomain("AuthDomain");
export const clearTokenStore = AuthDomain.event();

export const loginEffect = AuthDomain.effect<ILoginForm, ILoginResponce, Error>(
  {
    handler: loginFetch,
  }
);

export const logout = AuthDomain.event();

export const login$ = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginEffect.pending, () =>
    localStorage.setItem(LocalStorageParams.TOKEN, "")
  )
  .on(loginEffect.done, (_, data) => {
    clearToken();
    data.result && saveToken(data.result.access_token);
    data.result.access_token && getMyProfile();
    return data.result;
  })
  .on(loginEffect.fail, (err) =>
    localStorage.removeItem(LocalStorageParams.TOKEN)
  )
  .on(logout, () => localStorage.removeItem(LocalStorageParams.TOKEN))
  .reset(clearTokenStore);

// login$.updates.watch((v) => console.log("LoginStoreWatch", v));
