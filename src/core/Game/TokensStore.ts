import { createStore, createEvent, sample } from "effector";
import { dices, setDices } from "./DicesStore";

const tableLength = 635;
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
  1: { id: 1, step: 0, position: 0, left: 35, top: 35, isJailed: 0 }
};

const diceTurn = sample(dices, setDices, v => v);

diceTurn.watch((v: any) => {
  const tokenState = tokens.getState();
  const currentToken = tokenState[v.userId];

  if (typeof currentToken !== "undefined") {
    const { position, step, isJailed } = currentToken;

    let left = 0;
    let top = 0;

    const posSum = v.sum + position;
    let newPosition = posSum >= 40 ? posSum - 40 : posSum;

    if (newPosition >= 0 && newPosition <= 10) {
      left = newPosition === 0 ? 35 : (newPosition + 1) * 55;
      top = 35;
      if (newPosition === 10) {
        left += 40;
        top -= 15;
      }
    } else if (newPosition >= 11 && newPosition <= 20) {
      top = (newPosition - 9) * 55;
      left = tableLength;
      if (newPosition === 20) {
        top += 22;
        left -= 5;
      }
    } else if (newPosition >= 21 && newPosition <= 30) {
      left = tableLength + 28 - (newPosition - 19) * 55;
      top = tableLength;
      if (newPosition === 30) {
        top -= 10;
        left += 5;
      }
    } else if (newPosition >= 31 && newPosition <= 40) {
      top = tableLength + 28 - (newPosition - 29) * 55;
      left = 35;
    }

    const res = {
      [v.userId]: {
        id: v.userId,
        step: step + 1,
        position: newPosition,
        left,
        top,
        isJailed
      }
    };

    changePosition(res);
  }
});

export const resetTokens = createEvent();

export const changePosition = createEvent<TokenStore>();

export const tokens = createStore(defaultToken)
  .on(changePosition, (_, v) => v)
  .reset(resetTokens);

tokens.watch(v => console.log("TOKENS", v[1]));
