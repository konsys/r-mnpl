import { BoardDomain } from "./BoardDomain";
import { fetchPlayers } from "../components/core/PlayersCore/Api";
import { IPlayer } from "../components/views/Players/Players";

const PlayersDomain = BoardDomain.domain("PlayersDomain");

export const resetPlayersEvent = PlayersDomain.event();
export const getPlayersEffect = PlayersDomain.effect<void, IPlayer[], Error>({
  handler: fetchPlayers,
});

export const playersStore = PlayersDomain.store<IPlayer[]>([])
  .on(getPlayersEffect.done, (_, { result }) => result)
  .on(getPlayersEffect.fail, (err) => console.error("error", err))
  .reset(resetPlayersEvent);

playersStore.watch((v) => console.log("playersStoreWatch", v));
