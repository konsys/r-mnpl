import { mnplSocket } from "./index";
import { GameDomain } from "./GameModel";

const DiceDomain = GameDomain.createDomain("DiceDomain");
export const resetDices = DiceDomain.createEvent();

export interface DiceStore {
  userId: number;
  dice1: number;
  dice2: number;
  dice3: number;
  meanPosition: number;
}

export const rollDicesFX = DiceDomain.createEffect("rollDices", {
  handler: async ({ name }) => {
    mnplSocket.emit("rollDices", { rollDices: name });
  }
});

export const setDices = DiceDomain.createEvent<any>();

const init: DiceStore = {
  userId: 1,
  dice1: 0,
  dice2: 0,
  dice3: 0,
  meanPosition: 0
};

export const dices = DiceDomain.createStore(init)
  .on(setDices, (_, data) => ({
    userId: 1,
    dice1: data.dices[0],
    dice2: data.dices[1],
    dice3: data.dices[2],
    meanPosition: data.meanPosition
  }))
  .reset(resetDices);
