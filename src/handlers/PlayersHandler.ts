import { playersStore, setPlayersEvent } from "../stores/PlayersStore";
import { IPlayer } from "../types/BoardTypes";
import { tokensStore, setTokenPositionEvent } from "../stores/TokensStore";

export const playersHandler = (players: IPlayer[]) => {
  const tokens = tokensStore.getState();
  console.log(11221111111111, players[0], tokens[players[0].userId]);
  setPlayersEvent({ players, version: ++playersStore.getState().version });
  setTokenPositionEvent({
    [players[0].userId]: {
      userId: players[0].userId,
      step: 0,
      meanPosition: players[0].meanPosition,
      jailed: players[0].jailed,
      usedLines: 1,
    },
  });
};
