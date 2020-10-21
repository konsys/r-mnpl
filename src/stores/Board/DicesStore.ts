import {
  IActionId,
  IDices,
  IncomeMessageType,
  OutcomeMessageType,
} from "../../types/types";

import { BoardDomain } from "./BoardDomain";
import { boardSocket } from "./SocketConnetcModel";

const DiceDomain = BoardDomain.domain("DiceDomain");
export const hideDicesEvent = DiceDomain.event();

export const tokenTransitionCompleted = DiceDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(OutcomeMessageType.OUTCOME_TOKEN_TRANSITION_COMPLETED, {
  handler: async (data) =>
    boardSocket.emit(
      OutcomeMessageType.OUTCOME_TOKEN_TRANSITION_COMPLETED,
      data
    ),
});

export const setDicesEvent = DiceDomain.event<IDices>();

const init: IDices = {
  type: IncomeMessageType.DO_NOTHING,
  userId: 1,
  dices: [0, 0, 0],
  dicesSum: 0,
  _id: "",
  isModal: false,
};

export const dices$ = DiceDomain.store<IDices>(init)
  .on(setDicesEvent, (_, data) => {
    // setTimeout(() => hideDicesEvent(), 3000);
    return data;
  })
  .reset(hideDicesEvent);

// dices$.watch((v) => console.log("dicesStoreWatch", v));
