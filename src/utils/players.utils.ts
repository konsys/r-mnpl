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
  if (currentPLayerIndex === -1) throw new Error("player not found");

  playersState.players[currentPLayerIndex] = player;

  setPlayersEvent({
    version: playersState.version < 100 ? ++playersState.version : 0,
    players: playersState.players,
  });

  return true;
};

export const updateAllPlayers = (players: IPlayer[]): boolean => {
  const playersState = playersStore.getState();

  console.log(111111);

  setPlayersEvent({
    version: ++playersState.version,
    players: players,
  });

  return true;
};
