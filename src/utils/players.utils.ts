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
  const res = pStore.players.findIndex((v) => v.isActing === true);
  return res > -1 ? res : undefined;
};

export const getPlayerIndexById = (userId: number) => {
  const res = players$.getState().players.findIndex((v) => v.userId === userId);
  return res > -1 ? res : undefined;
};

export const updatePlayer = (player: IPlayer): boolean => {
  const playersState = players$.getState();
  const currentPLayerIndex = getPlayerIndexById(player.userId);
  if (!currentPLayerIndex) {
    return false;
  }
  playersState.players[currentPLayerIndex] = player;
  return updateAllPlayers(playersState.players);
};

export const updateAllPlayers = (players: IPlayer[]): boolean => {
  let version = players$.getState().version;
  version = version ? version : 0;
  setPlayersEvent({
    version: version < 100 ? ++version : 0,
    players,
  });

  return true;
};
