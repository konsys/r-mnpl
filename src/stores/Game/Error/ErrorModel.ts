import { createEvent, createStore } from "effector";
import { loginFx } from "../Login/LoginModel";
import {
  registrationCodeFx,
  registrationFx,
  resendRegistrationEmailFx,
} from "../Login/RegistrationModel";

export const clearError = createEvent();
export const setError = createEvent<string>();

export const error$ = createStore<string | null>(null)
  .on(loginFx.fail, (_, v: any) => v.error.response.data.message)
  .on(registrationFx.fail, (_, v: any) => v.error.response.data.message)
  .on(setError, (_, v: string) => v)
  .on(registrationCodeFx.fail, (_, v: any) => {
    return v.error.response.data.message || "Network error";
  })
  .on(resendRegistrationEmailFx.fail, (_, v: any) => {
    return v.error.response.data.message || "Network error";
  })
  .reset(clearError);
