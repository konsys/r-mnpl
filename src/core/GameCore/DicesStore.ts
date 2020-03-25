import { mnplSocket } from "./index";
import { GameDomain } from "./GameModel";

const DiceDomain = GameDomain.createDomain("DiceDomain");
export const resetDices = DiceDomain.createEvent();

export interface IDiceStore {
  userId: number;
  dice1: number;
  dice2: number;
  dice3: number;
  dicesSum: number;
  meanPosition: number;
}

export const rollDicesEffect = DiceDomain.effect("rollDices", {
  handler: async ({ name }) => {
    mnplSocket.emit("rollDices", { rollDices: name });
  }
});

export const setDicesEvent = DiceDomain.event<any>();

const init: IDiceStore = {
  userId: 1,
  dice1: 0,
  dice2: 0,
  dice3: 0,
  dicesSum: 0,
  meanPosition: 0
};

export const dicesStore = DiceDomain.store(init)
  .on(setDicesEvent, (_, data) => ({
    userId: 1,
    dice1: data.dices[0],
    dice2: data.dices[1],
    dice3: data.dices[2],
    dicesSum: data.dices.reduce((acc: number, v: number) => acc + v, 0),
    meanPosition: data.meanPosition
  }))
  .reset(resetDices);
