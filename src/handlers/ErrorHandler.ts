import { toast } from "react-toastify";

export enum ErrorCode {
  "NotEnoughMoney" = 101,
  "CompanyHasOwner" = 102,
  "WrongTranactionId" = 103,
  "NotUserField" = 104,
  "FieldIsMortgaged" = 105,
  "NotMyTurn" = 106,
  "CannotMortgageField" = 107,
  "CannotUnMortgageField" = 108,
}

export interface IGameError {
  code: number;
  message: string;
}

export const errorHandler = (error: IGameError) => {
  toast(ErrorCode[error.code]);
};
