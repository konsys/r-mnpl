import { registrationCodeFetch, registrationFetch } from "api/Registration/api";
import { sample } from "effector";
import { AuthDomain, clearLoginFail } from "./LoginModel";

export interface IRegistrationForm {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  description?: string;
  code: string;
}

export interface IRegistrationCode {
  email: string;
  code?: string;
}

export const sendRegistrationCode = AuthDomain.event<{ code: string }>();

export const registrationCodeFx = AuthDomain.effect<
  { code: string; email: string },
  any,
  Error
>({
  handler: registrationCodeFetch,
});

export const registrationEvent = AuthDomain.event<IRegistrationForm>();
export const registrationFx = AuthDomain.effect<IRegistrationForm, any, Error>({
  handler: registrationFetch,
});

export const registration$ = AuthDomain.store<IRegistrationCode | null>(
  null
).on(registrationFx.done, (_, { result }) => {
  console.log(555555555555, result);
  return { email: result ? result.email : "" };
});

sample({
  source: registrationEvent,
  clock: registrationEvent,
  fn: (rg: IRegistrationForm) => {
    clearLoginFail();
    return rg;
  },
  target: registrationFx,
});

sample({
  source: registration$.map((v) => v && v.email),
  clock: sendRegistrationCode,
  fn: (email, code) => {
    console.log(11111111111, code, email);
    return { code: "", email: email ? email : "" };
  },
  target: registrationCodeFx,
});

registration$.updates.watch((v) => console.log(555555555555, v));
// registrationFx.done.watch(() => (window.location.href = "/registration/code/"));
