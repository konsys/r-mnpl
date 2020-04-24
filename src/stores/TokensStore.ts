import { sample } from "effector";
import { dicesStore, setDicesEvent } from "./DicesStore";
import { BoardDomain } from "./BoardDomain";
import { BoardAction, BoardActionType, IActionId } from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";
import { actionsStore } from "./ActionStore";
import { TokenMove } from "../types/BoardTypes";
import { playersStore, setPlayersEvent } from "./PlayersStore";
import {
  MARGIN_CENTER,
  DURATION,
  TRANSITION_LINE_TIMEOUT,
  CORNER_FIELDS,
  FIELD_SIZE,
  TABLE_SIZE,
} from "../utils/boardParams";

interface IFieldPositions {
  positionNumber: number;
  left: number;
  top: number;
}

const fieldPositions: IFieldPositions[] = [];

const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();

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
  const playersState = playersStore.getState();

  const newPlayersState = playersState.players.map(
    (currentPlayer, playerIndex) => {
      let stopPosition = 0;
      if (typeof currentPlayer !== "undefined") {
        stopPosition = action.meanPosition ? action.meanPosition : 0;

        const usedFields = createTurnsArray(
          currentPlayer.prevPosition,
          stopPosition
        );

        let lastIndex = 0;
        let timeout = TRANSITION_LINE_TIMEOUT;
        for (let field of usedFields) {
          if (
            CORNER_FIELDS.indexOf(field) > -1 ||
            lastIndex === usedFields.length - 1
          ) {
            setTimeout(
              () =>
                moveTokenEffect({
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
      }
      return {
        userId: action.userId,
        prevPosition: currentPlayer.meanPosition,
        meanPosition: stopPosition,
        ...playersState.players[playerIndex],
      };
    }
  );

  setTimeout(
    () =>
      setPlayersEvent({
        version: ++playersState.version,
        players: newPlayersState,
      }),
    TRANSITION_LINE_TIMEOUT
  );

  // newPlayersState
});

export const moveTokenEffect = TokenDomain.effect<TokenMove, TokenMove, Error>({
  handler: moveTokenByTimeout,
});

export const tokenMoveStore = TokenDomain.store<TokenMove>(initPosition)
  .on(moveTokenEffect.done, (_, v) => v.result)
  .reset(resetTokens);

export const rollDicesCompletedEffect = TokenDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async (data) => boardSocket.emit(BoardActionType.ROLL_DICES, data),
});
