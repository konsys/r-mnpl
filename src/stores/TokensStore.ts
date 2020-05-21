import { BoardDomain } from "./BoardDomain";
import { LINE_TRANSITION_TIMEOUT, CORNER_FIELDS } from "../utils/boardParams";
import { createTurnsArray, fieldPositions } from "../utils/fields.utils";
import { getActingPlayer, updatePlayer } from "../utils/players.utils";
import { tokensMoveCompleteEffect } from "./ModalStore";
const TokenDomain = BoardDomain.createDomain("TokenDomain");
export const resetTokens = TokenDomain.event();

const fields = fieldPositions();

export const relocateToken = () => {
  const currentPlayer = getActingPlayer();

  let stopPosition = 0;
  if (currentPlayer && currentPlayer?.meanPosition !== stopPosition) {
    stopPosition = currentPlayer.meanPosition ? currentPlayer.meanPosition : 0;

    const usedFields = createTurnsArray(
      currentPlayer.prevPosition,
      stopPosition
    );

    let lastIndex = 0;
    let timeout = LINE_TRANSITION_TIMEOUT;

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
        timeout += LINE_TRANSITION_TIMEOUT;
      }
      lastIndex++;
    }
  } else if (currentPlayer && stopPosition === 0) {
    setTimeout(() => {
      updatePlayer({
        ...currentPlayer,
        tokenLeftPosition: fields[0].left,
        tokenTopPosition: fields[0].top,
        prevPosition: currentPlayer.meanPosition,
        meanPosition: stopPosition,
      });
    });
  }
};
export const onTransitionEnd = (userId: number) => {
  console.log(234234234234);
  tokensMoveCompleteEffect({
    userId,
  });
};
