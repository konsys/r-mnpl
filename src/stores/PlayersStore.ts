import { BoardDomain } from "./BoardDomain";
import { IUser } from "../components/views/Players/Players";
import { fetchPlayers } from "../components/core/PlayersCore/Api";

const PlayersDomain = BoardDomain.domain("PlayersDomain");

export const resetPlayersEvent = PlayersDomain.event();
export const getPlayersEffect = PlayersDomain.effect<void, IUser[], Error>({
  handler: fetchPlayers,
});

export const playersStore = PlayersDomain.store<IUser[]>([])
  .on(getPlayersEffect.done, (_, { result }) => result)
  .on(getPlayersEffect.fail, (err) => console.error("error", err))
  .reset(resetPlayersEvent);
