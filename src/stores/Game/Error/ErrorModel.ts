import { createEvent, createStore } from "effector";
import { toast } from "react-toastify";
import { ErrorCode } from "utils/errors";

export const clearError = createEvent();
export const setError = createEvent<number>();

export const error$ = createStore<number>(0)
  .on(setError, (_, v: any) => {
    if (v.error.response && v.error.response.data) {
      console.log(333333333333, v.error.response.data.code);
      return v.error.response.data.code;
    } else {
      return v.error.message;
    }
  })
  .reset(clearError);

error$.updates.watch((code: number) => {
  console.log(2222222222222, code);
  notify(code);
});

const notify = (code: number) => toast(ErrorCode[code]);
