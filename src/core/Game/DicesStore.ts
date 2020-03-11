import { createStore, createEvent, createEffect } from "effector";
import { mnplSocket } from "./index";

export const resetDices = createEvent();

export const rollDicesFX = createEffect("rollDices", {
  handler: async ({ name }) => {
    await mnplSocket.emit("rollDices", { rollDices: name });
  }
});

export const setDices = createEvent<any>();

export const dices = createStore({
  userId: 0,
  dice1: 0,
  dice2: 0,
  dice3: 0,
  sum: 0
})
  .on(setDices, (_, data) => {
    return {
      userId: 1,
      dice1: data.dices[0],
      dice2: data.dices[1],
      dice3: data.dices[2],
      sum: data.meanPosition
    };
  })
  .reset(resetDices);

// dices.watch(v => console.log(1111, v));
