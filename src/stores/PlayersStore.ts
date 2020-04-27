import { BoardDomain } from "./BoardDomain";
import { fetchPlayers } from "../components/core/PlayersCore/api";
import { IPlayer } from "../types/BoardTypes";
import { MARGIN_CENTER } from "../types/boardParams";

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
  .reset(resetPlayersEvent);

playersStore.watch((v) =>
  console.log("playersStoreWatch", v.players[0] && v.players[0].meanPosition)
);
