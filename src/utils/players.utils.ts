import { players$, setPlayersEvent } from "../stores/Board/PlayersStore";

import { IPlayer } from "../types/types";

export const getPlayer = (userId: number): IPlayer | undefined => {
  const players = players$.getState();
  return players ? players.players.find((v) => v.userId === userId) : undefined;
};

export const getActingPlayer = () => {
  const pStore = players$.getState();
  return pStore.players && pStore.players.find((v) => v.isActing === true);
};

export const getActingPlayerIndex = () => {
  const pStore = players$.getState();
  return pStore.players.findIndex((v) => v.isActing === true);
};

export const getPlayerIndexById = (userId: number) =>
  players$.getState().players.findIndex((v) => v.userId === userId);

export const updatePlayer = (player: IPlayer): boolean => {
  const playersState = players$.getState();
  const currentPLayerIndex = getPlayerIndexById(player.userId);
  if (currentPLayerIndex === -1) throw new Error("player not found");

  playersState.players[currentPLayerIndex] = player;

  updateAllPlayers(playersState.players);

  return true;
};

export const updateAllPlayers = (players: IPlayer[]): boolean => {
  let version = players$.getState().version;
  setPlayersEvent({
    version: version < 100 ? ++version : 0,
    players: players,
  });

  return true;
};
