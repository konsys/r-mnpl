import { registrationCodeFetch, registrationFetch } from "api/Registration/api";
import { createEffect, createEvent, createStore, sample } from "effector";
import { clearLoginFail } from "./LoginModel";

export interface IRegistrationForm {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  description?: string;
  registrationCode: string;
}

export interface IRegistrationCode {
  email: string;
  registrationCode?: string;
}

export const sendRegistrationCode = createEvent<{ registrationCode: string }>();
export const resendRegistrationEmail = createEvent();

export const registrationCodeFx = createEffect<
  { registrationCode: string; email: string },
  any,
  Error
>({
  handler: registrationCodeFetch,
});

export const registrationEvent = createEvent<IRegistrationForm>();
export const registrationFx = createEffect<IRegistrationForm, any, Error>({
  handler: registrationFetch,
});

export const registration$ = createStore<IRegistrationCode | null>(null).on(
  registrationFx.done,
  (_, { result }) => {
    return { email: result ? result.email : "" };
  }
);

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
  fn: (email, { registrationCode }) => {
    return { registrationCode, email: email ? email : "" };
  },
  target: registrationCodeFx,
});

registrationCodeFx.done.watch(() => (window.location.href = "/login"));
