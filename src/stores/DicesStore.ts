import { BoardDomain } from "./BoardDomain";
import {
  IActionId,
  OutcomeMessageType,
  IncomeMessageType,
  IDices,
} from "../types/types";
import { boardSocket } from "../components/core/BoardCore/BoardCore";

const DiceDomain = BoardDomain.domain("DiceDomain");
export const hideDicesEvent = DiceDomain.event();

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
  isModal: false,
};

export const dicesStore = DiceDomain.store<IDices>(init)
  .on(setDicesEvent, (_, data) => data)
  .reset(hideDicesEvent);

// dicesStore.watch((v) => console.log("dicesStoreWatch", v));
