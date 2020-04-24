import { sample } from "effector";
import { dicesStore, setDicesEvent } from "./DicesStore";
import { BoardDomain } from "./BoardDomain";
import { BoardAction, BoardActionType, IActionId } from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";
import { actionsStore } from "./ActionStore";
import { IToken, TokenStore, TokenMove } from "../types/BoardTypes";

export interface PlayerToken {
  position: number;
  jailed: number;
}
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

export const TRANSITION_LINE_TIMEOUT = 700;

const cornerFields = [0, 10, 20, 30];

const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();
export const setTokenPositionEvent = TokenDomain.event<TokenStore>();

const init: TokenStore = {
  version: 0,
  tokens: [{ jailed: 0, meanPosition: 0, userId: 0, usedLines: 0, step: 0 }],
};

const initPosition: TokenMove = {
  userId: 1,
  left: MARGIN_CENTER,
  top: MARGIN_CENTER,
  duration: DURATION,
};

function moveTokenByTimeout<T>(token: T): Promise<T> {
  return new Promise<T>((resolve) =>
    setTimeout(() => resolve(token), TRANSITION_LINE_TIMEOUT)
  );
}

export const onTransitionEnd = async (v: TokenMove) => {
  const actionState = actionsStore.getState();
  setTimeout(
    () => rollDicesCompletedEffect({ actionId: actionState.actionId }),
    TRANSITION_LINE_TIMEOUT
  );
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
      top,
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
      top,
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
      top,
    });
  } else if (i >= 31 && i <= 39) {
    left = MARGIN_CENTER;
    top = TABLE_SIZE - FIELD_SIZE * (i - 29);
    fieldPositions.push({
      positionNumber: i,
      left,
      top,
    });
  }
}
const diceTurn = sample(dicesStore, setDicesEvent, (v) => v);
diceTurn.watch(async (action: BoardAction) => {
  const tokenState = tokensStore.getState();
  const currentToken = tokenState.tokens.find(
    (v) => v.userId === action.userId
  );

  if (typeof currentToken !== "undefined") {
    const { meanPosition, step, jailed } = currentToken;
    const stopPosition = action.meanPosition ? action.meanPosition : 0;
    const usedFields = createTurnsArray(meanPosition, stopPosition);

    let lastIndex = 0;
    let timeout = TRANSITION_LINE_TIMEOUT;
    let usedLines = 0;
    for (let field of usedFields) {
      if (
        cornerFields.indexOf(field) > -1 ||
        lastIndex === usedFields.length - 1
      ) {
        usedLines++;

        setTimeout(
          () =>
            changeTokenPosition({
              userId: 1,
              duration: DURATION,
              left: fieldPositions[field].left,
              top: fieldPositions[field].top,
            }),
          timeout
        );
        timeout += TRANSITION_LINE_TIMEOUT;
      }
      lastIndex++;
    }

    let res: IToken = {
      userId: action.userId,
      step: step + 1,
      meanPosition: stopPosition,
      jailed,
      usedLines,
    };
    const tokenIndex = tokenState.tokens.findIndex(
      (v) => v.userId === action.userId
    );
    tokenState.tokens[tokenIndex] = res;
    setTimeout(
      () =>
        setTokenPositionEvent({
          version: ++tokenState.version,
          tokens: tokenState.tokens,
        }),
      TRANSITION_LINE_TIMEOUT
    );
  }
});

export const tokensStore = TokenDomain.store<TokenStore>(init)
  .on(setTokenPositionEvent, (_, v) => v)
  .reset(resetTokens);

tokensStore.watch((v) => console.log(1111111111111111, v));

export const changeTokenPosition = TokenDomain.effect<
  TokenMove,
  TokenMove,
  Error
>({
  handler: moveTokenByTimeout,
});

export const tokenPositionStore = TokenDomain.store<TokenMove>(initPosition)
  .on(changeTokenPosition.done, (_, v) => v.result)
  .reset(resetTokens);

export const rollDicesCompletedEffect = TokenDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async (data) => boardSocket.emit(BoardActionType.ROLL_DICES, data),
});

tokensStore.watch((v) => console.log("TSTORE", v));
tokensStore.watch((v) => console.log("TSTORE", v));
