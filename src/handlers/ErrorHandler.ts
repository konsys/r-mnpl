import { toast } from "react-toastify";

export enum ErrorCode {
  "NotEnoughMoney" = 101,
  "CompanyHasOwner" = 102,
  "WrongTranactionId" = 103,
}

export interface IGameError {
  code: number;
  message: string;
}

export const errorHandler = (error: IGameError) => {
  toast(ErrorCode[error.code]);
};
