import { createStore, createEvent, sample } from "effector";
import { dices, diceRandStandart } from "./DicesStore";

export const calcPosition = () => {};

export interface TokenParams {
  id: number;
  step: number;
  position: number;
  left: number;
  top: number;
  isJailed: 0 | 1;
}

export interface TokenStore {
  [key: number]: TokenParams;
}

const defaultToken: TokenStore = {
  1: { id: 1, step: 0, position: 0, left: 0, top: 0, isJailed: 0 }
};

const diceTurn = sample(dices, diceRandStandart, v => v);

diceTurn.watch(v => {
  const tokenState = tokens.getState();

  const currentToken = tokenState[v.userId];

  if (typeof currentToken !== "undefined") {
    const { position, left, top, step, isJailed } = currentToken;

    let left1 = 0;
    let top1 = 0;
    let curPos = 0;

    const posSum = v.sum + position;
    let position1 = posSum > 40 ? 40 - posSum : posSum;

    if (position1 >= 0 && position1 <= 11) {
      left1 = left + (position + 1) * 55;
      curPos = position1;
      // console.log("TOKEN1", position, left, top);
    } else if (position1 >= 12 && position1 <= 21) {
      curPos = position - 12;
      top1 = top + curPos * 55;
      // console.log("TOKEN2", position, curPos, left, top);
    } else if (position1 >= 22 && position1 <= 31) {
      curPos = position - 22;
      left1 = left - curPos * 55;
      // console.log("TOKEN3", position, curPos, left, top);
    } else if (position1 >= 32 && position1 <= 40) {
      curPos = position - 32;
      top1 = top - curPos * 55;
      // console.log("TOKEN4", position, curPos, left, top);
    }
    const res = {
      [v.userId]: {
        id: v.userId,
        step: step + 1,
        position: curPos,
        left: left1,
        top: top1,
        isJailed
      }
    };

    // console.log(234234234, v);

    changePosition(res);
  }
});

export const resetTokens = createEvent();

export const changePosition = createEvent<TokenStore>();

export const tokens = createStore(defaultToken)
  .on(changePosition, (_, v) => v)
  .reset(resetTokens);

tokens.watch(v => console.log("TOKENS", v));
