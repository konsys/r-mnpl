import { GameDomain, getMyProfile, user$ } from "../UserStore";
import { IRoomState, getRoomsFx } from "../Rooms/RoomsModel";
import { combine, sample } from "effector";

import { IUser } from "types/types";
import { createGate } from "effector-react";
import { fetchRoom } from "api/Rooms/api";
import { surrenderBoardFetch } from "api/Board/api";

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
export const surrenderRoom = GameDomain.event<void>();

export const boardGate = createGate<{ gameId: string }>("boardGate");

export const surrenderBoardFx = GameDomain.effect<
  { userId: number; roomId: string },
  boolean,
  Error
>({
  handler: surrenderBoardFetch,
});

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

sample({
  clock: surrenderRoom,
  source: combine({
    userId: user$.map((v: IUser) => v.userId),
    roomId: boardGame$.map((v: any) => {
      return v && v.roomId;
    }),
  }),
  target: surrenderBoardFx,
});
