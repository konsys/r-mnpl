import {
  ILoginForm,
  ILoginResponce,
} from "components/core/Registration/Login/Login";

import { createDomain, sample } from "effector";
import { getMyProfile } from "../User/UserModel";
import { loginFetch } from "api/Login/api";
import { clearToken, saveRefreshToken, saveToken } from "../Token/TokenModel";
import { createGate } from "effector-react";

import { clearError } from "../Error/ErrorModel";

export const AuthDomain = createDomain("AuthDomain");

export const clearTokenStore = AuthDomain.event();

export const login = AuthDomain.event<ILoginForm>();
export const loginFx = AuthDomain.effect<ILoginForm, ILoginResponce, Error>({
  handler: loginFetch,
});

export const LoginGate = createGate();

LoginGate.open.watch(() => clearError());

sample({
  source: login,
  clock: login,
  fn: (lg: ILoginForm) => {
    clearError();
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
