import { createEvent, createStore } from "effector";
import { NotificationManager } from "react-notifications";
import { toast } from "react-toastify";
import { ErrorCode } from "utils/errors";

export const clearError = createEvent();
export const setError = createEvent<number>();

export const error$ = createStore<number>(0)
  .on(setError, (_, v: any) => {
    if (v.error.response && v.error.response.data) {
      return v.error.response.data.message;
    } else {
      return v.error.message;
    }
  })
  .reset(clearError);

error$.updates.watch((v: number) => notify());

const notify = () => toast("Wow so easy !");
