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
const DURATION = 1;
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
    position: 0,
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
    if (currentPosition > 39) {
      currentPosition = 0;
    }
    usedFields.push(currentPosition);
  }
  return usedFields;
};

for (let i = 0; i < 40; i++) {
  let currentline = 1;
  let left = 0;
  let top = 0;
  if (i >= 0 && i <= 10) {
    currentline = 1;
    left = FIELD_SIZE * (i + 1);
    top = MARGIN_CENTER;
    if (i === 10) {
      left += 45;
      top -= 25;
    } else if (i === 0) {
      left -= 25;
    }
    fieldPositions.push({
      positionNumber: i,
      left,
      top
    });
  } else if (i >= 11 && i <= 20) {
    currentline = 2;
    left = TABLE_SIZE - MARGIN_CENTER;
    top = FIELD_SIZE * (i - 9);
    if (i === 20) {
      top += 25;
    }
    fieldPositions.push({
      positionNumber: i,
      left,
      top
    });
  } else if (i >= 21 && i <= 30) {
    currentline = 3;
    left = TABLE_SIZE - FIELD_SIZE * (i - 19);
    top = TABLE_SIZE - MARGIN_CENTER;
    if (i === 30) {
      left -= 25;
    }
    fieldPositions.push({
      positionNumber: i,
      left,
      top
    });
  } else if (i >= 31 && i <= 39) {
    currentline = 4;
    left = MARGIN_CENTER;
    top = TABLE_SIZE - FIELD_SIZE * (i - 29);
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
        duration: DURATION,
        left: fieldPositions[fieldNumber].left,
        top: fieldPositions[fieldNumber].top
      });
    }

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
