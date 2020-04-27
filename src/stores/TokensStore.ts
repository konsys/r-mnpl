import { sample } from "effector";
import {
  dicesStore,
  setDicesEvent,
  rollDicesCompletedEffect,
} from "./DicesStore";
import { BoardDomain } from "./BoardDomain";
import { BoardAction } from "../types/BoardTypes";
import { actionsStore } from "./ActionStore";
import { TokenMove } from "../types/BoardTypes";
import { TRANSITION_LINE_TIMEOUT, CORNER_FIELDS } from "../utils/boardParams";
import { createTurnsArray, fieldPositions } from "../utils/fields.utils";
import { getActingPlayer, updatePlayer } from "../utils/players.utils";

const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();

const fields = fieldPositions();

export const onTransitionEnd = async (v: TokenMove) => {
  const actionState = actionsStore.getState();
  setTimeout(
    () => rollDicesCompletedEffect({ actionId: actionState.actionId }),
    TRANSITION_LINE_TIMEOUT
  );
};

const diceTurn = sample(dicesStore, setDicesEvent, (v) => v);

diceTurn.watch(async (action: BoardAction) => {
  const currentPlayer = getActingPlayer();

  let stopPosition = 0;
  if (currentPlayer) {
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
        setTimeout(() => {
          updatePlayer({
            ...currentPlayer,
            tokenLeftPosition: fields[field].left,
            tokenTopPosition: fields[field].top,
            prevPosition: currentPlayer.meanPosition,
            meanPosition: stopPosition,
          });
        }, timeout);
        timeout += TRANSITION_LINE_TIMEOUT;
      }
      lastIndex++;
    }
  }

  // newPlayersState
});
