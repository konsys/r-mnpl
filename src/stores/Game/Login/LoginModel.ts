import {
  ILoginForm,
  ILoginResponce,
} from "components/core/Registration/Login/Login";

import { createDomain } from "effector";
import { getMyProfile } from "../User/UserModel";
import { loginFetch } from "api/Login/api";
import { clearToken, saveRefreshToken, saveToken } from "../Token/TokenModel";
import { store } from "react-notifications-component";

const AuthDomain = createDomain("AuthDomain");
export const clearTokenStore = AuthDomain.event();

export const loginFx = AuthDomain.effect<ILoginForm, ILoginResponce, Error>({
  handler: loginFetch,
});

loginFx.fail.watch(() => {
  store.addNotification({
    title: "Error",
    message: "Connection failed",
    type: "warning", // 'default', 'success', 'info', 'warning'
    container: "bottom-right", // where to position the notifications
    animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
    dismiss: {
      duration: 2000,
    },
  });
});

export const login$ = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginFx.done, (_, data) => {
    clearToken();
    if (data && data.result) {
      saveToken(data.result.accessToken);
      saveRefreshToken(data.result.refreshToken);
      getMyProfile();
    }

    return data.result;
  })
  .on(loginFx.fail, (err) => clearToken())
  .reset(clearTokenStore);

// login$.updates.watch((v) => console.log("LoginStoreWatch", v));
