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

export interface IPlayerAction {
  fromUserId: number;
  toUserId: number;
  isVisible: boolean;
  position: number;
  profile: boolean;
  ignore: boolean;
  ignoreOff: boolean;
  report: boolean;
  restart: boolean;
  creditTake: boolean;
  creditPay: boolean;
  leave: boolean;
  contract: boolean;
  kick: boolean;
}

export const openPlayerActionEvent = PlayersDomain.event<IPlayerAction>();
export const closePlayerActionEvent = PlayersDomain.event();

const init: IPlayerAction = {
  fromUserId: 0,
  toUserId: 0,
  position: 1,
  isVisible: false,
  ignore: false,
  ignoreOff: false,
  profile: false,
  contract: false,
  creditTake: false,
  creditPay: false,
  kick: false,
  leave: false,
  report: false,
  restart: false,
};

export const playersGate = createGate<{ userIds: number[]; user: string }>(
  "playersGate"
);

export const playerActionStore = PlayersDomain.store<IPlayerAction>(init)
  .on(openPlayerActionEvent, (_, data) => data)
  .reset(closePlayerActionEvent);

export interface Iplayers {
  version: number;
  players: IPlayer[];
}
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
export const setPlayersEvent = PlayersDomain.event<Iplayers>();

export const players$ = PlayersDomain.store<Iplayers>({
  players: [],
  version: 0,
})
  .on(getInitPlayersFx.done, (_, data) => {
    // Init token position
    const fields = fieldPositions();
    const players = data.result.map((player) => {
      updateToken(
        {
          jailed: player.jailed,
          left: fields[player.meanPosition].left,
          top: fields[player.meanPosition].top,
          meanPosition: player.meanPosition,
          userId: player.userId,
        },
        "getPlayersEffect.done"
      );
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

export const playersPositionChange = sample(
  players$,
  setPlayersEvent,
  (v) => v
);

playersPositionChange.watch((v) => {
  tokens$.getState().tokens.map((token) => {
    const player = getPlayer(token.userId);
    return player && token && moveTokenAfterPlayerUpdate(token, player);
  });
});

sample({
  clock: merge([playersGate.open]),
  source: combine({
    ids: playersGate.state.map(({ userIds }) => userIds),
    gameId: boardGame$.map((v) => v?.roomId),
  }),
  fn: ({ ids, gameId }) => {
    getInitFieldsFx();
    return { ids, gameId: gameId || "" };
  },
  target: getInitPlayersFx,
});
