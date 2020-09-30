import { combine, merge, sample } from "effector";
import {
  moveTokenAfterPlayerUpdate,
  tokensStore,
  updateToken,
} from "./TokensStore";

import { BoardDomain } from "./BoardDomain";
import { IPlayer } from "../../types/types";
import { createGate } from "effector-react";
import { fieldPositions } from "../../utils/fields.utils";
import { getPlayer } from "../../utils/players.utils";
import { getUserFx } from "stores/Game/User/UserModel";
import { usersFetch } from "../../api/Users/api";

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

export interface Iplayers$ {
  version: number;
  players: IPlayer[];
}
export const resetPlayersEvent = PlayersDomain.event();
export const getPlayersFx = PlayersDomain.effect<number[], IPlayer[], Error>({
  handler: usersFetch,
});
export const setPlayersEvent = PlayersDomain.event<Iplayers$>();

export const players$ = PlayersDomain.store<Iplayers$>({
  players: [],
  version: 0,
})
  .on(getPlayersFx.done, (_, data) => {
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
  .on(getPlayersFx.fail, (err: any) => console.error("error", err))
  .on(setPlayersEvent, (_, state) => state)
  .reset(resetPlayersEvent);

players$.watch((v) => console.log("players$Watch", v));

export const playersPositionChange = sample(
  players$,
  setPlayersEvent,
  (v) => v
);

playersPositionChange.watch((v) => {
  tokensStore.getState().tokens.map((token) => {
    const player = getPlayer(token.userId);
    return player && token && moveTokenAfterPlayerUpdate(token, player);
  });
});

sample({
  clock: merge([playersGate.open]),
  source: combine({
    userIds: playersGate.state.map(({ userIds }) => userIds),
  }),
  fn: ({ userIds }) => {
    return userIds;
  },
  target: getPlayersFx,
});

sample({
  clock: playersGate.open,
  source: playersGate.state,
  fn: ({ user }) => user,
  target: getUserFx,
});
