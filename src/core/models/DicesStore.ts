import { mnplSocket } from "../GameCore/index";
import { GameDomain, IBoardModel } from "./BoardStore";
import { RollDices, BoardEventType } from "../models/types/BoardTypes";

const DiceDomain = GameDomain.domain("DiceDomain");
export const resetDicesEvent = DiceDomain.event();

export const rollDicesEffect = DiceDomain.effect<
  any,
  Promise<SocketIOClient.Socket>,
  Error
>("rollDices", {
  handler: async (game: IBoardModel) => mnplSocket.emit("rollDices", game)
});

export const setDicesEvent = DiceDomain.event<RollDices>();

const init: RollDices = {
  type: BoardEventType.ROLL_DICES,
  isVisible: false,
  userId: 1,
  dices: [1, 1, 0],
  dicesSum: 2,
  meanPosition: 0,
  _id: ""
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
