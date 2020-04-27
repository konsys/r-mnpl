import { sample } from "effector";
import { dicesStore, setDicesEvent } from "./DicesStore";
import { BoardDomain } from "./BoardDomain";
import {
  BoardAction,
  BoardActionType,
  IActionId,
  TokenMoveStore,
} from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";
import { actionsStore } from "./ActionStore";
import { TokenMove } from "../types/BoardTypes";
import { playersStore, setPlayersEvent } from "./PlayersStore";
import {
  MARGIN_CENTER,
  DURATION,
  TRANSITION_LINE_TIMEOUT,
  CORNER_FIELDS,
} from "../utils/boardParams";
import {
  createTurnsArray,
  moveTokenByTimeout,
  fieldPositions,
} from "../utils/fields.utils";

interface IFieldPositions {
  positionNumber: number;
  left: number;
  top: number;
}

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
  const playersState = playersStore.getState();
  const tMove = tokenMove.getState();

  const newPlayersState = playersState.players.map(
    (currentPlayer, playerIndex) => {
      let stopPosition = 0;
      if (typeof currentPlayer !== "undefined") {
        stopPosition = action.meanPosition ? action.meanPosition : 0;

        const usedFields = createTurnsArray(
          currentPlayer.prevPosition,
          stopPosition
        );
        const tokenIndex = tMove.tokens.findIndex(
          (v) => v.userId === currentPlayer.userId
        );

        let lastIndex = 0;
        let timeout = TRANSITION_LINE_TIMEOUT;
        for (let field of usedFields) {
          if (
            CORNER_FIELDS.indexOf(field) > -1 ||
            lastIndex === usedFields.length - 1
          ) {
            console.log(234234, tokenIndex);

            tMove.tokens[tokenIndex] = {
              userId: currentPlayer.userId,
              duration: DURATION,
              left: fields[field].left,
              top: fields[field].top,
            };

            setTimeout(
              () =>
                moveTokenEffect({
                  version: ++tMove.version,
                  tokens: tMove.tokens,
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

export const moveTokenEffect = TokenDomain.effect<
  TokenMoveStore,
  TokenMoveStore,
  Error
>({
  handler: moveTokenByTimeout,
});

export const tokenMove = TokenDomain.store<TokenMoveStore>({
  version: 0,
  tokens: [],
})
  .on(moveTokenEffect.done, (_, v) => v.result)
  // Populate tokens
  .on(setPlayersEvent, (prev, players) => ({
    version: ++prev.version,
    tokens: players.players.map((p) => ({
      userId: p.userId,
      left: MARGIN_CENTER,
      top: MARGIN_CENTER,
      duration: DURATION,
    })),
  }))
  .reset(resetTokens);

export const rollDicesCompletedEffect = TokenDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async (data) => boardSocket.emit(BoardActionType.ROLL_DICES, data),
});
