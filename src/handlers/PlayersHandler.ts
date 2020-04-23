import { playersStore, setPlayersEvent } from "../stores/PlayersStore";
import { IPlayer } from "../types/BoardTypes";

export const playersHandler = (players: IPlayer[]) => {
  setPlayersEvent({ players, version: playersStore.getState().version });
};
