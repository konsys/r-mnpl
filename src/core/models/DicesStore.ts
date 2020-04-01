import { mnplSocket } from "../GameCore/index";
import { GameDomain, IBoardModel } from "./BoardStore";
import { RollDices, BoardActionType } from "../models/types/BoardTypes";

const DiceDomain = GameDomain.domain("DiceDomain");
export const resetDicesEvent = DiceDomain.event();

export const rollDicesEffect = DiceDomain.effect<
  any,
  Promise<SocketIOClient.Socket>,
  Error
>("rollDices", {
  handler: async (game: IBoardModel) => {
    console.log("efwefwef");
    return mnplSocket.emit("rollDices", game);
  }
});

export const setDicesEvent = DiceDomain.event<RollDices>();

const init: RollDices = {
  type: BoardActionType.ROLL_DICES,
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
