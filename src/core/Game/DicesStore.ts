import { createStore, createEvent } from "effector";

export const diceRandStandart = createEvent();
export const diceRandPremium = createEvent();
export const resetDices = createEvent();

export const dices = createStore({
  userId: 0,
  dice1: 0,
  dice2: 0,
  dice3: 0,
  sum: 0
})
  .on(diceRandStandart, () => {
    const dice1 = random(0, 6);
    const dice2 = random(0, 6);
    return {
      userId: 1,
      dice1,
      dice2,
      dice3: 0,
      sum: dice1 + dice2
    };
  })
  .on(diceRandPremium, () => {
    const dice1 = random(0, 6);
    const dice2 = random(0, 6);
    return {
      userId: 1,
      dice1: random(0, 6),
      dice2: random(0, 6),
      dice3: random(0, 6),
      sum: dice1 + dice2
    };
  })
  .reset(resetDices);

const random = (min: number, max: number) => {
  return Math.ceil(min + Math.random() * (max - min));
};
