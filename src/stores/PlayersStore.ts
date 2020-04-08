import { MainDomain } from "./MainStore";
import { IUser } from "../components/views/Players/Players";
import { fetchPlayers } from "../components/core/PlayersCore/Api";

const PlayersDomain = MainDomain.domain("PlayersDomain");

export const resetPLayersEvent = PlayersDomain.event();
export const getPlayersEffect = PlayersDomain.effect<void, IUser[], Error>({
  handler: fetchPlayers,
});

export const playersStore = PlayersDomain.store<IUser[]>([])
  .on(getPlayersEffect.done, (_, { result }) => result)
  .on(getPlayersEffect.fail, (err) => console.log("error", err))
  .reset(resetPLayersEvent);
