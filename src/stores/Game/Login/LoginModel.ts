import {
  ILoginForm,
  ILoginResponce,
} from "components/core/Registration/Login/Login";

import { createDomain, sample } from "effector";
import { getMyProfile } from "../User/UserModel";
import { loginFetch } from "api/Login/api";
import { clearToken, saveRefreshToken, saveToken } from "../Token/TokenModel";
import { createGate } from "effector-react";

export const AuthDomain = createDomain("AuthDomain");
export const clearTokenStore = AuthDomain.event();

export const login = AuthDomain.event<ILoginForm>();
export const loginFx = AuthDomain.effect<ILoginForm, ILoginResponce, Error>({
  handler: loginFetch,
});

export const LoginGate = createGate();

export const clearLoginFail = AuthDomain.event();

export const loginFail$ = AuthDomain.store<string | null>(null)
  .on(loginFx.fail, () => "Wrong email or password")
  .reset(clearLoginFail);

LoginGate.open.watch(() => clearLoginFail());

sample({
  source: login,
  clock: login,
  fn: (lg: ILoginForm) => {
    clearLoginFail();
    return lg;
  },
  target: loginFx,
});

export const login$ = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginFx.done, (_, { result }: { result: any }) => {
    clearToken();
    if (result) {
      saveToken(result.accessToken);
      saveRefreshToken(result.refreshToken);
      getMyProfile();
    }

    return result;
  })
  .on(loginFx.fail, () => clearToken())
  .reset(clearTokenStore);

// login$.updates.watch((v) => console.log("LoginStoreWatch", v));
