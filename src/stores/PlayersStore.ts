import { BoardDomain } from "./BoardDomain";
import { fetchPlayers } from "../components/core/PlayersCore/api";
import { IPlayer } from "../types/types";
import { sample } from "effector";
import {
  moveTokenAfterPlayerUpdate,
  tokensStore,
  updateToken,
} from "./TokensStore";
import { getPlayerById } from "../utils/players.utils";
import { fieldPositions } from "../utils/fields.utils";

const PlayersDomain = BoardDomain.domain("PlayersDomain");

export interface IPlayersStore {
  version: number;
  players: IPlayer[];
}
export const resetPlayersEvent = PlayersDomain.event();
export const getPlayersEffect = PlayersDomain.effect<void, IPlayer[], Error>({
  handler: fetchPlayers,
});
export const setPlayersEvent = PlayersDomain.event<IPlayersStore>();

export const playersStore = PlayersDomain.store<IPlayersStore>({
  players: [],
  version: 0,
})
  .on(getPlayersEffect.done, (_, data) => {
    // Init token position
    const fields = fieldPositions();
    const players = data.result.map((player, k) => {
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
    const player = getPlayerById(token.userId);
    return player && token && moveTokenAfterPlayerUpdate(token, player);
  });
});
