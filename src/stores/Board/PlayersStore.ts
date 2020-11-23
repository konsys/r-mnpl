import { combine, merge, sample } from "effector";
import {
  moveTokenAfterPlayerUpdate,
  tokens$,
  updateToken,
} from "./TokensStore";

import { BoardDomain } from "./BoardDomain";
import { IPlayer } from "../../types/types";
import { boardGame$ } from "stores/Game/Board/BoardModel";
import { createGate } from "effector-react";
import { fieldPositions } from "../../utils/fields.utils";
import { getInitFieldsFx } from "./FieldsStore";
import { getPlayer } from "../../utils/players.utils";
import { initUsersFetch } from "../../api/Users/api";

export const PlayersDomain = BoardDomain.domain("PlayersDomain");

export const InitBoardPlayersGate = createGate<{
  userIds: number[];
  user: string;
}>("InitBoardPlayersGate");

export interface IPlayers {
  version: number;
  players: IPlayer[];
}

export const initPlayers: IPlayers = {
  players: [],
  version: 0,
};
export const setPlayersEvent = PlayersDomain.event<IPlayers>();
export const resetPlayersEvent = PlayersDomain.event();
export const getInitPlayersFx = PlayersDomain.effect<
  {
    ids: number[];
    gameId: string;
  },
  IPlayer[],
  Error
>({
  handler: initUsersFetch,
});

export const players$ = PlayersDomain.store<IPlayers>(initPlayers)
  .on(getInitPlayersFx.done, (_, data) => {
    // Init token position
    const fields = fieldPositions();
    const players = data.result.map((player) => {
      updateToken({
        jailed: player.jailed,
        left: fields[player.meanPosition].left,
        top: fields[player.meanPosition].top,
        meanPosition: player.meanPosition,
        userId: player.userId,
      });
      return player;
    });
    return {
      players,
      version: 1,
    };
  })
  .on(getInitPlayersFx.fail, (err: any) => console.error("error", err))
  .on(setPlayersEvent, (_, state) => state)
  .reset(resetPlayersEvent);

sample({
  source: combine({
    tokens: tokens$.map((v) => v),
  }),
  clock: setPlayersEvent,
  fn: ({ tokens }) => {
    tokens.tokens.map((token: any) => {
      const player = getPlayer(token.userId);
      return player && token && moveTokenAfterPlayerUpdate(token, player);
    });
  },
});

// playersPositionChange.watch((v) => {
//   tokens$.getState().tokens.map((token: any) => {
//     const player = getPlayer(token.userId);
//     return player && token && moveTokenAfterPlayerUpdate(token, player);
//   });
// });

sample({
  clock: merge([InitBoardPlayersGate.open]),
  source: combine({
    ids: InitBoardPlayersGate.state.map(({ userIds }) => userIds),
    gameId: boardGame$.map((v) => v?.roomId),
  }),
  fn: ({ ids, gameId }) => {
    getInitFieldsFx();
    return { ids, gameId: gameId || "" };
  },
  target: getInitPlayersFx,
});
