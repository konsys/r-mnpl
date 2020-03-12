import { createStore, createEvent, createEffect } from "effector";
import { mnplSocket } from "./index";

export const resetDices = createEvent();

export interface DiceStore {
  userId: number;
  dice1: number;
  dice2: number;
  dice3: number;
  meanPosition: number;
}

export const rollDicesFX = createEffect("rollDices", {
  handler: async ({ name }) => {
    mnplSocket.emit("rollDices", { rollDices: name });
  }
});

export const setDices = createEvent<any>();

const init: DiceStore = {
  userId: 1,
  dice1: 0,
  dice2: 0,
  dice3: 0,
  meanPosition: 0
};

export const dices = createStore(init)
  .on(setDices, (_, data) => ({
    userId: 1,
    dice1: data.dices[0],
    dice2: data.dices[1],
    dice3: data.dices[2],
    meanPosition: data.meanPosition
  }))
  .reset(resetDices);
