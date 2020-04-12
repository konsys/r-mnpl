import { BoardDomain } from "./MainStore";
import { BoardAction, BoardActionType, IActionId } from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";

const DiceDomain = BoardDomain.domain("DiceDomain");
export const resetDicesEvent = DiceDomain.event();

export const rollDicesEffect = DiceDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async (data) => boardSocket.emit(BoardActionType.ROLL_DICES, data),
});

export const setDicesEvent = DiceDomain.event<BoardAction>();

const init: BoardAction = {
  type: BoardActionType.ROLL_DICES,
  userId: 1,
  dices: [1, 1, 0],
  dicesSum: 0,
  meanPosition: 0,
  _id: "",
};

export const dicesStore = DiceDomain.store<BoardAction>(init)
  .on(setDicesEvent, (_, data) => data)
  .reset(resetDicesEvent);

// dicesStore.watch((v) => console.log(234242342, v));
