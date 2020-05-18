import {
  playersStore,
  setPlayersEvent,
  relocatePLayerEvent,
} from "../stores/PlayersStore";
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

export const updatePlayer = (
  player: IPlayer,
  srcOfChange?: string
): boolean => {
  const playersState = playersStore.getState();
  const currentPLayerIndex = getPlayerIndexById(player.userId);
  const currentPLayer = playersState.players[currentPLayerIndex];

  if (currentPLayerIndex === -1) return false;

  playersState.players[currentPLayerIndex] = player;

  if (
    player.meanPosition !== currentPLayer.meanPosition ||
    player.prevPosition !== currentPLayer.prevPosition ||
    player.tokenTopPosition !== currentPLayer.tokenTopPosition ||
    player.tokenLeftPosition !== currentPLayer.tokenLeftPosition
  ) {
    // For moving tokens
    relocatePLayerEvent({
      version: playersState.version < 100 ? ++playersState.version : 0,
      players: playersState.players,
    });
  } else {
    setPlayersEvent({
      version: playersState.version < 100 ? ++playersState.version : 0,
      players: playersState.players,
    });
  }

  return true;
};

export const updateAllPlayers = (players: IPlayer[]): boolean => {
  const playersState = playersStore.getState();

  let isPlayerMoves = false;
  for (let playerIndex in playersState.players) {
    if (
      playersState.players[playerIndex].meanPosition !==
      players[playerIndex].meanPosition
    ) {
      isPlayerMoves = true;
    }
  }

  if (isPlayerMoves) {
    relocatePLayerEvent({
      version: ++playersState.version,
      players: players,
    });
  } else {
    setPlayersEvent({
      version: ++playersState.version,
      players: players,
    });
  }

  return true;
};
