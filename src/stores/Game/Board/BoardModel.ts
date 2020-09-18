import { GameDomain, getMyProfile } from "../UserStore";
import { IRoomState, getRoomsFx } from "../Rooms/RoomsModel";

import { createGate } from "effector-react";
import { fetchRoom } from "api/Rooms/api";
import { sample } from "effector";

export interface IBoardParams {
  room: IRoomState;
}
export const getRoomFx = GameDomain.effect<string, IRoomState, Error>({
  handler: fetchRoom,
});

export const boardGame$ = GameDomain.store<IRoomState | null>(null).on(
  getRoomFx.done,
  (_, { result }) => result
);

export const boardCompleted$ = GameDomain.store<IRoomState | null>(null);
export const BoardDomain = GameDomain.domain("BoardDomain");

export const boardGate = createGate<{ gameId: string }>("boardGate");

sample({
  clock: boardGate.open,
  source: boardGate.state,
  fn: ({ gameId }: { gameId: string }) => {
    getMyProfile();
    getRoomsFx();
    return gameId;
  },
  target: getRoomFx,
});
