import { createDomain } from "effector";

export const GameDomain = createDomain("GameDomain");

interface GameModel {
  gameId: string;
}

const gameStore = GameDomain.store<GameModel>({ gameId: "" });
export const resetGameEvent = GameDomain.event<void>();
export const setGameIdEvent = GameDomain.event<string>();
gameStore.on(setGameIdEvent, v => v).reset(resetGameEvent);
