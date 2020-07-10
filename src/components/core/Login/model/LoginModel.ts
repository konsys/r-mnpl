import { createDomain } from "effector";
import { loginFetch } from "./api";
import { ILoginForm, ILoginResponce } from "../Login";

const AuthDomain = createDomain("AuthDomain");

export enum MLocalStorage {
  TOKEN = "token",
}

export const loginEffect = AuthDomain.effect<ILoginForm, ILoginResponce, Error>(
  {
    handler: loginFetch,
  }
);

export const LoginStore = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginEffect.done, (_, data) => {
    localStorage.setItem(MLocalStorage.TOKEN, data.result.access_token);
    return data.result;
  })
  .on(loginEffect.fail, (err) => console.error(err));

// LoginStore.updates.watch((v) => console.log("LoginStoreWatch", v));
