import { BoardDomain } from "./BoardDomain";
import { fetchPlayers } from "../components/core/PlayersCore/api";
import { IPlayer } from "../types/BoardTypes";
import { MARGIN_CENTER } from "../types/boardParams";
import { sample } from "effector";
import { moveTokenAfterDices, tokensStore, updateToken } from "./TokensStore";

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
    const players = data.result.map((player, k) => {
      updateToken({
        jailed: player.jailed,
        left: MARGIN_CENTER + k * 25,
        top: MARGIN_CENTER + k * 25,
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

playersPositionChange.watch(() =>
  tokensStore.getState().tokens.map((v) => moveTokenAfterDices(v))
);
