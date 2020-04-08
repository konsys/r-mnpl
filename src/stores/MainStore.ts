import { createDomain } from "effector";

export const MainDomain = createDomain("MainDomain");

export interface IBoardModel {
  boardId: string;
}

export const BoardDomain = MainDomain.domain("BoardDomain");
