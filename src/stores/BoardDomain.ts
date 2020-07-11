import { createDomain } from "effector";
import nanoid from "nanoid";
export const MainDomain = createDomain("MainDomain");

export const BoardDomain = MainDomain.domain("BoardDomain");

export interface IGameStore {
  gameId: string;
  players: number[];
}

export const gameStore = BoardDomain.store({
  gameId: nanoid(8),
  players: [2, 3],
});
