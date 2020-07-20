import { BoardDomain } from "./BoardDomain";
import nanoid from "nanoid";

const GameStore = BoardDomain.domain("DiceDomain");

export const setNewGameEvent = GameStore.event();
export const resetGameEvent = GameStore.event();

export interface IGameStore {
  gameId: string;
  players: number[];
}

export const gameStore = BoardDomain.store({
  gameId: nanoid(8),
  players: [2],
});
