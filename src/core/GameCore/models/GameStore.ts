import { createDomain } from "effector";

export const GameDomain = createDomain("GameDomain");

interface GameModel {
  gameId: string;
}

const gameStore = GameDomain.store<GameModel>({ gameId: "" });
const resetGameEvent = GameDomain.event<void>();
const setGameIdEvent = GameDomain.event<string>();
gameStore.on(setGameIdEvent, v => v).reset(resetGameEvent);
