import { createEvent, createStore } from "effector";

export const clearError = createEvent();
export const setError = createEvent<string>();

export const error$ = createStore<string | null>(null)
  .on(setError, (_, v: string) => v)
  .reset(clearError);
