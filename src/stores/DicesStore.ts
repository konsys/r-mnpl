import { BoardDomain } from "./BoardDomain";
import {
  IActionId,
  OutcomeMessageType,
  IncomeMessageType,
  IDices,
} from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";

const DiceDomain = BoardDomain.domain("DiceDomain");
export const resetDicesEvent = DiceDomain.event();

export const tokenTransitionCompleted = DiceDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(OutcomeMessageType.INCOME_TOKEN_TRANSITION_COMPLETED, {
  handler: async (data) =>
    boardSocket.emit(
      OutcomeMessageType.INCOME_TOKEN_TRANSITION_COMPLETED,
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
};

export const dicesStore = DiceDomain.store<IDices>(init)
  .on(setDicesEvent, (_, data) => data)
  .reset(resetDicesEvent);

// dicesStore.watch((v) => console.log("dicesStoreWatch", v));
