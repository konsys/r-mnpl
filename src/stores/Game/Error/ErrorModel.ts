import { createEvent, createStore } from "effector";
import { toast } from "react-toastify";
import { ErrorCode } from "utils/errors";

export const clearError = createEvent();
export const setError = createEvent<number>();

export const error$ = createStore<number>(0)
  .on(setError, (_, v: any) => {
    if (
      v.error.response &&
      v.error.response.data &&
      v.error.response.data.message
    ) {
      return v.error.response.data.message;
    } else {
      return v.error.message;
    }
  })
  .reset(clearError);

error$.updates.watch((code: number) => {
  notifyError(code);
});

export const notifyError = (code: number) =>
  toast.error(ErrorCode[code], { onClose: () => clearError() });
