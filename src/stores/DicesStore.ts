import { mnplSocket } from "../components/core/GameCore/index";
import { BoardDomain } from "./MainStore";
import { RollDices, BoardActionType } from "../types/BoardTypes";

const DiceDomain = BoardDomain.domain("DiceDomain");
export const resetDicesEvent = DiceDomain.event();

export const rollDicesEffect = DiceDomain.effect<
  any,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async () => mnplSocket.emit(BoardActionType.ROLL_DICES),
});

export const setDicesEvent = DiceDomain.event<RollDices>();

const init: RollDices = {
  type: BoardActionType.ROLL_DICES,
  userId: 1,
  dices: [1, 1, 0],
  dicesSum: 2,
  meanPosition: 0,
  _id: "",
};

export const dicesStore = DiceDomain.store<RollDices>(init)
  .on(setDicesEvent, (_, data) => data)
  .reset(resetDicesEvent);
