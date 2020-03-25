import { createDomain } from "effector";

export const GameDomain = createDomain("GameDomain");

interface GameModel {
  gameId: string;
}

export const gameStore = GameDomain.store<GameModel>({ gameId: "" });
export const resetGameEvent = GameDomain.event<void>();
export const setGameIdEvent = GameDomain.event<string>();
gameStore.on(setGameIdEvent, (_, gameId) => ({ gameId })).reset(resetGameEvent);

gameStore.watch(v => console.log("gameStore", v));
