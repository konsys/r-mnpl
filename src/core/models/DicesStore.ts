import { mnplSocket } from "../GameCore/index";
import { GameDomain, IBoardModel } from "./BoardStore";

const DiceDomain = GameDomain.domain("DiceDomain");
export const resetDicesEvent = DiceDomain.event();

export interface IDiceStore {
  isVisible: boolean;
  userId: number;
  dice1: number;
  dice2: number;
  dice3: number;
  dicesSum: number;
  meanPosition: number;
}

export const rollDicesEffect = DiceDomain.effect<
  any,
  Promise<SocketIOClient.Socket>,
  Error
>("rollDices", {
  handler: async (game: IBoardModel) => mnplSocket.emit("rollDices", game)
});

export const setDicesEvent = DiceDomain.event<any>();

const init: IDiceStore = {
  isVisible: false,
  userId: 1,
  dice1: 0,
  dice2: 0,
  dice3: 0,
  dicesSum: 0,
  meanPosition: 0
};

export const dicesStore = DiceDomain.store<any>(init)
  .on(setDicesEvent, (prev, data) => {
    if (data && Array.isArray(data.dices) && data.dices.length === 3) {
      return {
        isVisible: data.isVisible,
        userId: data.userId,
        dice1: data.dices[0],
        dice2: data.dices[1],
        dice3: data.dices[2],
        dicesSum: data.dices.reduce((acc: number, v: number) => acc + v, 0),
        meanPosition: data.meanPosition
      };
    } else return prev;
  })
  .reset(resetDicesEvent);

export const rollDices = () => {
  // resetDicesEvent();
  // showDicesEvent();
  // hideActionModalEvent();
  // rollDicesEffect(null);
  // setTimeout(() => rollDicesEffect({}));
  // setTimeout(() => {
  //   hideDicesEvent();
  //   showActionModalEvent();
  // }, 2000);
};
