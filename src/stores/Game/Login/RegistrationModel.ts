import { registrationFetch } from "api/Login/api";
import { sample } from "effector";
import { AuthDomain, clearLoginFail } from "./LoginModel";

export interface IRegistrationForm {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  description?: string;
}

export interface IRegistrationCode {
  email: string;
  code: string;
}

export const registration = AuthDomain.event<IRegistrationForm>();
export const registrationFx = AuthDomain.effect<
  IRegistrationForm,
  IRegistrationForm,
  Error
>({
  handler: registrationFetch,
});

export const registration$ = AuthDomain.store<IRegistrationCode | null>(
  null
).on(registrationFx.done, (data) => {
  return { email: data ? data.email : "", code: "" };
});

sample({
  source: registration,
  clock: registration,
  fn: (rg: IRegistrationForm) => {
    clearLoginFail();
    return rg;
  },
  target: registrationFx,
});

registrationFx.done.watch(() => (window.location.href = "/registration/code"));
