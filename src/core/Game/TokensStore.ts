import { createStore, createEvent, sample } from "effector";
import { dices, setDices, DiceStore } from "./DicesStore";

interface fieldPositions {
  positionNumber: number;
  left: number;
  top: number;
}

const TABLE_SIZE = 665;
const MARGIN_CENTER = 35;
const FIELD_SIZE = 55;
const fieldPositions: fieldPositions[] = [];

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
  duration: number;
  top: number;
  left: number;
}
const init: TokenStore = {
  1: {
    userId: 1,
    step: 0,
    position: 1,
    moves: [
      {
        left: 35,
        top: 35,
        duration: 0
      }
    ],
    isJailed: 0
  }
};

const createTurnsArray = (position: number, stopPosition: number): number[] => {
  const usedFields = [];
  let currentPosition = position;
  while (currentPosition !== stopPosition) {
    currentPosition++;
    if (currentPosition > 40) {
      currentPosition = 1;
    }
    usedFields.push(currentPosition);
  }
  return usedFields.slice(0, usedFields.length - 1);
};

for (let i = 1; i < 40; i++) {
  let currentline = 1;
  let left = 0;
  let top = 0;
  if (i >= 1 && i <= 10) {
    currentline = 1;
    left = FIELD_SIZE * (i - 1);
    top = MARGIN_CENTER;
    fieldPositions.push({
      positionNumber: i,
      left,
      top
    });
  } else if (i >= 11 && i <= 20) {
    currentline = 2;
    left = TABLE_SIZE - MARGIN_CENTER;
    top = FIELD_SIZE * (i - 11) + MARGIN_CENTER;
    fieldPositions.push({
      positionNumber: i,
      left,
      top
    });
  } else if (i >= 21 && i <= 30) {
    currentline = 3;
    left = TABLE_SIZE - MARGIN_CENTER - FIELD_SIZE * (i - 21);
    top = TABLE_SIZE - MARGIN_CENTER;
    fieldPositions.push({
      positionNumber: i,
      left,
      top
    });
  } else if (i >= 31 && i <= 40) {
    currentline = 4;
    left = MARGIN_CENTER;
    top = TABLE_SIZE - (MARGIN_CENTER + FIELD_SIZE * (i - 31));
    fieldPositions.push({
      positionNumber: i,
      left,
      top
    });
  }
}

const diceTurn = sample(dices, setDices, v => v);

diceTurn.watch(async (v: DiceStore) => {
  const tokenState = tokens.getState();
  const currentToken = tokenState[v.userId];

  if (typeof currentToken !== "undefined") {
    const { position, step, isJailed } = currentToken;

    let stopPosition =
      v.meanPosition + position >= 40
        ? v.meanPosition + position - 40
        : v.meanPosition + position;

    const usedFields = createTurnsArray(position, stopPosition);

    let moves: TableMove[] = [];
    for (let fieldNumber of usedFields) {
      moves.push({
        duration: 0.1,
        left: fieldPositions[fieldNumber].left,
        top: fieldPositions[fieldNumber].top
      });
    }

    console.log(111111, position, stopPosition);
    console.log(222222, moves);

    let res: TokenStore = {
      [v.userId]: {
        userId: v.userId,
        step: step + 1,
        position: stopPosition,
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
// dices.watch(v => console.log("DICES", v));
