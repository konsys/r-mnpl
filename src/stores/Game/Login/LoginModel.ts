import { ILoginForm, ILoginResponce } from "components/core/Login/Login";

import { createDomain, sample } from "effector";
import { getMyProfile } from "../User/UserModel";
import { loginFetch, loginVkFetch } from "api/Login/api";
import { clearToken, saveRefreshToken, saveToken } from "../Token/TokenModel";
import { createGate } from "effector-react";

import { clearError, setError } from "../Error/ErrorModel";

export const AuthDomain = createDomain("AuthDomain");

export const clearTokenStore = AuthDomain.event();

export const login = AuthDomain.event<ILoginForm>();
export const loginFx = AuthDomain.effect<ILoginForm, ILoginResponce, Error>({
  handler: loginFetch,
});

loginFx.fail.watch((v: any) => setError(v));

export const loginVkFx = AuthDomain.effect<{ code: string }, boolean, Error>({
  handler: loginVkFetch,
});

export const LoginGate = createGate<{ code: string }>("LoginGate");

LoginGate.open.watch(() => clearError());

LoginGate.state.updates.watch((code) => {
  code.code && loginVkFx(code);
});

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
    auth({ ...result });
    return result;
  })
  .on(loginVkFx.done, (_, { result }: { result: any }) => {
    auth({ ...result });
    return result;
  })
  .on(loginFx.fail, () => clearToken())
  .reset(clearTokenStore);

const auth = ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  clearToken();
  saveToken(accessToken);
  saveRefreshToken(refreshToken);
  getMyProfile();
};
// login$.updates.watch((v) => console.log("LoginStoreWatch", v));
