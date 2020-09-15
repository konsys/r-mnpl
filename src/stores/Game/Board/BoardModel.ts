import { GameDomain, user$ } from "../UserStore";
import { combine, sample } from "effector";

import { IRoomState } from "../Rooms/RoomsModel";
import { IUser } from "types/types";
import { createGate } from "effector-react";
import { fetchRoom } from "api/Rooms/api";
import { surrenderBoardFetch } from "api/Board/api";

export interface IBoardParams {
  room: IRoomState;
}

export const BoardDomain = GameDomain.domain("BoardDomain");

export const surrenderRoom = GameDomain.event<void>();

export const getRoomFX = GameDomain.effect<string, IRoomState, Error>({
  handler: fetchRoom,
});

export const board$ = BoardDomain.store<IBoardParams | null>(
  null
).on(getRoomFX.done, (_, { result }) => ({ room: result }));

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
  source: boardGate.state.map(({ gameId }) => gameId),
  fn: (gameId) => {
    return gameId;
  },
  target: getRoomFX,
});

sample({
  clock: surrenderRoom,
  source: combine({
    userId: user$.map((v: IUser) => v.userId),
    roomId: board$.map((v: any) => {
      return v ? v.room.roomId : "";
    }),
  }),
  target: surrenderBoardFx,
});
