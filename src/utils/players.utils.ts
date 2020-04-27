import { playersStore, setPlayersEvent } from "../stores/PlayersStore";
import { IPlayer } from "../types/BoardTypes";

export const getActingPlayer = () => {
  const pStore = playersStore.getState();
  return pStore.players.find((v) => v.isActing === true);
};

export const getActingPlayerIndex = () => {
  const pStore = playersStore.getState();
  return pStore.players.findIndex((v) => v.isActing === true);
};

export const getPlayerIndexById = (userId: number) => {
  const pStore = playersStore.getState();
  return pStore.players.findIndex((v) => v.userId === userId);
};

export const updatePlayer = (player: IPlayer): boolean => {
  const playersState = playersStore.getState();
  const currentPLayerIndex = getPlayerIndexById(player.userId);

  if (currentPLayerIndex === -1) return false;

  playersState.players[currentPLayerIndex] = player;

  setPlayersEvent({
    version: ++playersState.version,
    players: playersState.players,
  });
  return true;
};

export const updatePlayers = (players: IPlayer[]): boolean => {
  const playersState = playersStore.getState();

  setPlayersEvent({
    version: ++playersState.version,
    players: players,
  });
  return true;
};
