import { playersStore, setPlayersEvent } from "../stores/PlayersStore";
import { IPlayer } from "../types/BoardTypes";
import { tokensStore } from "../stores/TokensStore";

export const playersHandler = (players: IPlayer[]) => {
  const tokens = tokensStore.getState();
  console.log(111111111111, players[0].meanPosition, tokens);
  setPlayersEvent({ players, version: ++playersStore.getState().version });
};
