import { mnplSocket } from "../core/GameCore/index";
import { GameDomain, IBoardModel } from "./BoardStore";
import { RollDices, BoardActionType } from "../core/models/types/BoardTypes";

const DiceDomain = GameDomain.domain("DiceDomain");
export const resetDicesEvent = DiceDomain.event();

export const rollDicesEffect = DiceDomain.effect<
  any,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async (game: IBoardModel) =>
    mnplSocket.emit(BoardActionType.ROLL_DICES, game),
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

export const dicesStore = DiceDomain.store<any>(init)
  .on(setDicesEvent, (_, data) => data)
  .reset(resetDicesEvent);

// const rollDices = () => {
// resetDicesEvent();
// showDicesEvent();
// hideActionModalEvent();
// rollDicesEffect(null);
// setTimeout(() => rollDicesEffect({}));
// setTimeout(() => {
//   hideDicesEvent();
//   showActionModalEvent();
// }, 2000);
// };
