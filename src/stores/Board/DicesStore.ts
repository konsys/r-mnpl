import { IDices, IncomeMessageType } from "types/types";

import { BoardDomain } from "./BoardDomain";
const DiceDomain = BoardDomain.domain("DiceDomain");
export const hideDices = DiceDomain.event();

export const showDices = DiceDomain.event<IDices>();

export const initDices: IDices = {
  type: IncomeMessageType.DO_NOTHING,
  userId: 1,
  dices: [0, 0, 0],
  dicesSum: 0,
  _id: "",
  isModal: false,
};

export const dices$ = DiceDomain.store<IDices>(initDices)
  .on(showDices, (_, data) => {
    setTimeout(() => hideDices(), 2500);
    return data;
  })
  .reset(hideDices);

// dices$.watch((v) => console.log("dices$Watch", v));
