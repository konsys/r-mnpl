import { createDomain } from "effector";

export const GameDomain = createDomain("GameDomain");

export interface IBoardModel {
  boardId: string;
}

export const BoardDomain = GameDomain.domain("BoardDomain");

export const boardStore = BoardDomain.store<IBoardModel>({ boardId: "" });
export const resetBoardEvent = BoardDomain.event<void>();
export const setBoardIdEvent = BoardDomain.event<string>();
boardStore
  .on(setBoardIdEvent, (_, boardId) => ({ boardId }))
  .reset(resetBoardEvent);
