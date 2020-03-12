import { createStore, createEvent, sample } from "effector";
import { dices, setDices, DiceStore } from "./DicesStore";

const tableSize = 665;
export interface TokenParams {
  userId: number;
  step: number;
  position: number;
  moves: TableMove[];
  isJailed: 0 | 1;
}

export interface TokenStore {
  [key: number]: TokenParams;
}

export interface TableMove {
  direction: "left" | "top";
  duration: number;
  top: number;
  left: number;
}
const init: TokenStore = {
  1: {
    userId: 1,
    step: 0,
    position: 0,
    moves: [
      {
        direction: "left",
        left: 35,
        top: 35,
        duration: 0
      }
    ],
    isJailed: 0
  }
};

const diceTurn = sample(dices, setDices, v => v);

diceTurn.watch(async (v: DiceStore) => {
  const tokenState = tokens.getState();
  const currentToken = tokenState[v.userId];

  if (typeof currentToken !== "undefined") {
    const { position, step, isJailed } = currentToken;

    const posSum = v.meanPosition + position;
    let newPosition = posSum >= 40 ? posSum - 40 : posSum;

    let moves: TableMove[] = [];
    const fieldDuration = 0.1;
    if (newPosition >= 0 && newPosition <= 10) {
      // top = 35;
      // if (newPosition === 10) {
      //   left += 40;
      //   top -= 15;
      // }
      moves.push({
        direction: "left",
        top: 35,
        left: newPosition === 0 ? 35 : (newPosition + 1) * 55,
        duration: (10 - position) * fieldDuration
      });
    } else if (newPosition >= 11 && newPosition <= 20) {
      // if (newPosition === 20) {
      //   top += 22;
      //   left -= 5;
      // }
      moves.push({
        direction: "top",
        top: (newPosition - 9) * 55,
        left: tableSize - 35,
        duration: (20 - position) * fieldDuration
      });
    } else if (newPosition >= 21 && newPosition <= 30) {
      // if (newPosition === 30) {
      //   top -= 10;
      //   left += 5;
      // }
      moves.push({
        direction: "left",
        top: tableSize - 35,
        left: tableSize - (newPosition - 19) * 55,
        duration: (30 - position) * fieldDuration
      });
    } else if (newPosition >= 31 && newPosition <= 40) {
      moves.push({
        direction: "left",
        top: tableSize - (newPosition - 29) * 55,
        left: 35,
        duration: (40 - position) * fieldDuration
      });
    }

    let res: TokenStore = {
      [v.userId]: {
        userId: v.userId,
        step: step + 1,
        position: newPosition,
        moves,
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
