import { BoardDomain } from "./BoardDomain";
import { IPlayer } from "../types/types";

const GameStore = BoardDomain.domain("DiceDomain");

export const setNewGameEvent = GameStore.event();
export const resetGameEvent = GameStore.event();

export interface IGameStore {
  gameId: string;
  players: IPlayer[];
}

export const fieldModalStore = GameStore.store<IGameStore | null>(null)
  .on(setNewGameEvent, (_, data) => data)
  .reset(resetGameEvent);
