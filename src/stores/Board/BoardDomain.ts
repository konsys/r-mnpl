import { createDomain } from "effector";
export const MainDomain = createDomain("MainDomain");

export const BoardDomain = MainDomain.domain("BoardDomain");
export const GameDomain = MainDomain.domain("GameDomain");
