import { ErrorCode } from "utils/errors";
import { toast } from "react-toastify";

export interface IGameError {
  code: number;
  message: string;
}

export const errorHandler = (error: IGameError) => {
  toast(ErrorCode[error.code]);
};
