import { createEvent, createStore } from "effector";

export const clearError = createEvent();
export const setError = createEvent<number>();

export const error$ = createStore<number>(0)
  .on(setError, (_, v: number) => v)
  .reset(clearError);
