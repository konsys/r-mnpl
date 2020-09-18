import { IRoomState, getRoomsFx } from "../Rooms/RoomsModel";

import { GameDomain } from "../UserStore";
import { createGate } from "effector-react";
import { sample } from "effector";

export interface IBoardParams {
  room: IRoomState;
}
export const setBoardGameId = GameDomain.event<string>();
export const boardGameId$ = GameDomain.store<string>("").on(
  setBoardGameId,
  (_, p) => p
);

export const BoardDomain = GameDomain.domain("BoardDomain");

export const boardGate = createGate<{ gameId: string }>("boardGate");

sample({
  clock: boardGate.open,
  source: boardGate.state,
  fn: ({ gameId }: { gameId: string }) => {
    console.log(23423423489);
    getRoomsFx();
    return gameId;
  },
  target: setBoardGameId,
});
