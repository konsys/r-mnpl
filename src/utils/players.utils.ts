import { playersStore, setPlayersEvent } from "../stores/PlayersStore";

import { IPlayer } from "../types/types";

export const getPlayer = (userId: number): IPlayer | undefined => {
  const players = playersStore.getState();
  return players ? players.players.find((v) => v.userId === userId) : undefined;
};

export const getActingPlayer = () => {
  const pStore = playersStore.getState();
  return pStore.players && pStore.players.find((v) => v.isActing === true);
};

export const getActingPlayerIndex = () => {
  const pStore = playersStore.getState();
  return pStore.players.findIndex((v) => v.isActing === true);
};

export const getPlayerIndexById = (userId: number) =>
  playersStore.getState().players.findIndex((v) => v.userId === userId);

export const updatePlayer = (player: IPlayer): boolean => {
  const playersState = playersStore.getState();
  const currentPLayerIndex = getPlayerIndexById(player.userId);
  if (currentPLayerIndex === -1) throw new Error("player not found");

  playersState.players[currentPLayerIndex] = player;

  updateAllPlayers(playersState.players);

  return true;
};

export const updateAllPlayers = (players: IPlayer[]): boolean => {
  let version = playersStore.getState().version;
  setPlayersEvent({
    version: version < 100 ? ++version : 0,
    players: players,
  });

  return true;
};
