import { BoardDomain } from "./BoardDomain";
import {
  BoardAction,
  IActionId,
  OutcomeMessageType,
  IncomeMessageType,
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

export const setDicesEvent = DiceDomain.event<BoardAction>();

const init: BoardAction = {
  type: IncomeMessageType.DO_NOTHING,
  userId: 1,
  dices: [1, 1, 0],
  dicesSum: 0,
  tokenPosition: 0,
  _id: "",
};

export const dicesStore = DiceDomain.store<BoardAction>(init)
  .on(setDicesEvent, (_, data) => data)
  .reset(resetDicesEvent);

// dicesStore.watch((v) => console.log("dicesStoreWatch", v));
