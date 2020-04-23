import { playersStore, setPlayersEvent } from "../stores/PlayersStore";
import { IPlayer } from "../types/BoardTypes";
import { getActingPlayer } from "../utils/players.utils";

export const playersHandler = (players: IPlayer[]) => {
  const players1 = playersStore.getState();
  const actingPlayer = getActingPlayer();
  // console.log(111111111, actingPlayer);
  setPlayersEvent({ players, version: ++players1.version });
  // console.log("playersHandler", players[0].money, pStore);
};
