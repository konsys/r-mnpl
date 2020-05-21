import { BoardDomain } from "./BoardDomain";
import { fetchPlayers } from "../components/core/PlayersCore/api";
import { IPlayer } from "../types/BoardTypes";
import { MARGIN_CENTER } from "../types/boardParams";
import { sample } from "effector";
import { relocateToken } from "./TokensStore";

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
export const relocatePLayerEvent = PlayersDomain.event<IPlayersStore>();

export const playersStore = PlayersDomain.store<IPlayersStore>({
  players: [],
  version: 0,
})
  .on(getPlayersEffect.done, (_, data) => {
    // Init token position
    const players = data.result.map((v, k) => ({
      ...v,
      tokenLeftPosition: MARGIN_CENTER + k * 25,
      tokenTopPosition: MARGIN_CENTER + k * 25,
    }));
    return {
      players,
      version: 1,
    };
  })
  .on(getPlayersEffect.fail, (err: any) => console.error("error", err))
  .on(setPlayersEvent, (_, state) => state)
  .on(relocatePLayerEvent, (_, state) => state)
  .reset(resetPlayersEvent);

// playersStore.watch((v) => console.log("playersStoreWatch", v));
// playersStore.watch((v) => console.log("relocatePLayerEvent", v));

export const playersChange = sample(
  playersStore,
  relocatePLayerEvent,
  (v) => v
);

playersChange.watch((store) => {
  store.players.map((v) => relocateToken(v));
});
