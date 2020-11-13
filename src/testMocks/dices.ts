import { IDices, IncomeMessageType } from "types/types";

export const testDices: IDices = {
    _id: "testId",
    isModal: true,
    type: IncomeMessageType.INCOME_ROLL_DICES_MODAL,
    dices: [1, 2, 3],
    dicesSum: 6,
    userId: 1,
  };
  