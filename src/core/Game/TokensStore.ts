import { createStore, createEvent, sample, createDomain } from "effector";
import { dices, setDices, DiceStore } from "./DicesStore";

interface fieldPositions {
  positionNumber: number;
  left: number;
  top: number;
}

const TABLE_SIZE = 665;
const MARGIN_CENTER = 35;
const FIELD_SIZE = 55;
const DURATION = 100;
const fieldPositions: fieldPositions[] = [];

export interface TokenParams {
  userId: number;
  step: number;
  position: number;
  isJailed: 0 | 1 | 2 | 3;
}

const cornerFields = [0, 10, 20, 30];
export interface TokenStore {
  [key: number]: TokenParams;
}

export interface TokenMove {
  userId: number;
  duration: number;
  top: number;
  left: number;
}

const TokenDomain = createDomain("Token domain");

const init: TokenStore = {
  1: {
    userId: 1,
    step: 0,
    position: 0,
    isJailed: 0
  }
};

const initPosition: TokenMove = {
  userId: 1,
  left: MARGIN_CENTER,
  top: MARGIN_CENTER,
  duration: DURATION
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
  let left = 0;
  let top = 0;
  if (i >= 0 && i <= 10) {
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

    const posSum = v.meanPosition + position;
    let stopPosition = posSum >= 40 ? posSum - 40 : posSum;
    stopPosition = stopPosition >= 40 ? stopPosition - 40 : stopPosition;

    const usedFields = createTurnsArray(position, stopPosition);

    let lastIndex = 0;
    let timeout = 1000;
    for (let field of usedFields) {
      if (
        cornerFields.indexOf(field) > -1 ||
        lastIndex === usedFields.length - 1
      ) {
        setTimeout(
          () =>
            changeTokenPosition({
              userId: 1,
              duration: DURATION,
              left: fieldPositions[field].left,
              top: fieldPositions[field].top
            }),
          timeout
        );
        console.log(11111, timeout, lastIndex);
        timeout += 1000;
      }
      lastIndex++;
    }

    let res: TokenStore = {
      [v.userId]: {
        userId: v.userId,
        step: step + 1,
        position: stopPosition,
        isJailed
      }
    };

    setTimeout(() => changePosition(res), 1200);
  }
});

export const resetTokens = createEvent();

export const changePosition = createEvent<TokenStore>();

export const tokens = createStore<TokenStore>(init)
  .on(changePosition, (_, v) => v)
  .reset(resetTokens);

export const changeTokenPosition = TokenDomain.effect<
  TokenMove,
  TokenMove,
  Error
>();

function moveTokenByTimeout<T>(token: T): Promise<T> {
  return new Promise<T>(resolve => setTimeout(() => resolve(token), 800));
}

export const tokenPosition = TokenDomain.store<TokenMove>(initPosition)
  .on(changeTokenPosition.done, (_, v) => v.result)
  .reset(resetTokens);

changeTokenPosition.use(moveTokenByTimeout);
