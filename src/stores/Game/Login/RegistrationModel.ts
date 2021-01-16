import {
  registrationCodeFetch,
  registrationFetch,
  sendRegistrationEmailFetch,
} from "api/Registration/api";
import { createEffect, createEvent, createStore, sample } from "effector";
import { clearError, setError } from "../Error/ErrorModel";

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

export const activateUser = createEvent<{ registrationCode: string }>();

export const activateUserFx = createEffect<
  { registrationCode: string; email: string },
  any,
  Error
>({
  handler: registrationCodeFetch,
});

activateUserFx.fail.watch((v: any) => {
  if (v.error.response && v.error.response.data) {
    setError(v.error.response.data.message);
  } else {
    setError(v.error.message);
  }
});

export const resendRegistrationEmail = createEvent();

export const resendRegistrationEmailFx = createEffect<string, any, Error>({
  handler: sendRegistrationEmailFetch,
});

resendRegistrationEmailFx.fail.watch((v: any) => {
  if (v.error.response && v.error.response.data) {
    setError(v.error.response.data.message);
  } else {
    setError(v.error.message);
  }
});

export const registrationEvent = createEvent<IRegistrationForm>();
export const registrationFx = createEffect<IRegistrationForm, any, Error>({
  handler: registrationFetch,
});

registrationFx.fail.watch((v: any) => {
  if (v.error.response && v.error.response.data) {
    setError(v.error.response.data.message);
  } else {
    setError(v.error.message);
  }
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
    clearError();
    return rg;
  },
  target: registrationFx,
});

sample({
  source: registration$.map((v) => v && v.email),
  clock: activateUser,
  fn: (email, { registrationCode }) => {
    clearError();
    return { registrationCode, email: email ? email : "" };
  },
  target: activateUserFx,
});

sample({
  source: registration$.map((v) => (v && v.email ? v.email : "")),
  clock: resendRegistrationEmail,
  fn: (email) => {
    clearError();
    return email;
  },
  target: resendRegistrationEmailFx,
});

activateUserFx.done.watch(() => (window.location.href = "/login"));
