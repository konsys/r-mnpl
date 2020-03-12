import { createStore, createEvent, sample } from "effector";
import { dices, setDices, DiceStore } from "./DicesStore";

// const
const tableSize = 665;
export interface TokenParams {
  userId: number;
  step: number;
  position: number;
  left: number;
  top: number;
  transition: string;
  isJailed: 0 | 1;
}

export interface TokenStore {
  [key: number]: TokenParams;
}

const init: TokenStore = {
  1: {
    userId: 1,
    step: 0,
    position: 0,
    left: 0,
    transition: "left 1s ease",
    top: 0,
    isJailed: 0
  }
};

const diceTurn = sample(dices, setDices, v => v);

diceTurn.watch(async (v: DiceStore) => {
  const tokenState = tokens.getState();
  const currentToken = tokenState[v.userId];

  if (typeof currentToken !== "undefined") {
    const { position, step, isJailed } = currentToken;

    let left = 0;
    let top = 0;

    const posSum = v.meanPosition + position;
    let newPosition = posSum >= 40 ? posSum - 40 : posSum;

    let duration = "1s 1s";
    if (newPosition >= 0 && newPosition <= 10) {
      left = newPosition === 0 ? 35 : (newPosition + 1) * 55;
      // top = 35;
      // if (newPosition === 10) {
      //   left += 40;
      //   top -= 15;
      // }
      duration = left > 5 ? "left 0.8s ease" : "left 0.5s ease";
    } else if (newPosition >= 11 && newPosition <= 20) {
      top = (newPosition - 9) * 55;
      left = tableSize;
      // if (newPosition === 20) {
      //   top += 22;
      //   left -= 5;
      // }
      duration = top > 5 ? "top 0.8s ease" : "top 0.5s ease";
    } else if (newPosition >= 21 && newPosition <= 30) {
      left = tableSize - (newPosition - 19) * 55;
      top = tableSize;
      // if (newPosition === 30) {
      //   top -= 10;
      //   left += 5;
      // }
      duration = left > 5 ? "left 0.8s ease " : "left 0.5s ease";
    } else if (newPosition >= 31 && newPosition <= 40) {
      top = tableSize - (newPosition - 29) * 55;
      duration = top > 5 ? " top 0.8s ease" : "top 0.5s ease";
    }

    let res: TokenStore = {
      [v.userId]: {
        userId: v.userId,
        step: step + 1,
        position: newPosition,
        transition: duration,
        left,
        top,
        isJailed
      }
    };

    setTimeout(() => changePosition(res), 1200);
  }
});

export const resetTokens = createEvent();

export const changePosition = createEvent<TokenStore>();

export const tokens = createStore(init)
  .on(changePosition, (_, v) => v)
  .reset(resetTokens);

// tokens.watch(v => console.log("TOKENS", v[1]));
dices.watch(v => console.log("DICES", v));
