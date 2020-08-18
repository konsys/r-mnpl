import {
  moveTokenAfterPlayerUpdate,
  tokensStore,
  updateToken,
} from "./TokensStore";

import { BoardDomain } from "./BoardDomain";
import { IPlayer } from "../../types/types";
import { fieldPositions } from "../../utils/fields.utils";
import { getPlayer } from "../../utils/players.utils";
import { sample } from "effector";
import { usersFetch } from "../../models/Users/api";

const PlayersDomain = BoardDomain.domain("PlayersDomain");

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

export const playerActionStore = PlayersDomain.store<IPlayerAction>(init)
  .on(openPlayerActionEvent, (_, data) => data)
  .reset(closePlayerActionEvent);

export interface IPlayersStore {
  version: number;
  players: IPlayer[];
}
export const resetPlayersEvent = PlayersDomain.event();
export const getPlayersEffect = PlayersDomain.effect<
  number[],
  IPlayer[],
  Error
>({
  handler: usersFetch,
});
export const setPlayersEvent = PlayersDomain.event<IPlayersStore>();

export const playersStore = PlayersDomain.store<IPlayersStore>({
  players: [],
  version: 0,
})
  .on(getPlayersEffect.done, (_, data) => {
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
  .on(getPlayersEffect.fail, (err: any) => console.error("error", err))
  .on(setPlayersEvent, (_, state) => state)
  .reset(resetPlayersEvent);

// playersStore.watch((v) => console.log("playersStoreWatch", v));

export const playersPositionChange = sample(
  playersStore,
  setPlayersEvent,
  (v) => v
);

playersPositionChange.watch((v) => {
  tokensStore.getState().tokens.map((token) => {
    const player = getPlayer(token.userId);
    return player && token && moveTokenAfterPlayerUpdate(token, player);
  });
});