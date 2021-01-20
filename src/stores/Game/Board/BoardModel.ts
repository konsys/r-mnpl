import { getMyProfile, user$ } from "../User/UserModel";
import { GameDomain } from "stores/Board/BoardDomain";
import { IRoom, RoomStatus, getRoomsFx, rooms$ } from "../Rooms/RoomsModel";
import { combine, sample } from "effector";

import { IUser } from "types/types";
import { createGate } from "effector-react";
import { fetchRoom } from "api/Rooms/api";
import { head } from "lodash";
import { surrenderBoardFetch } from "api/Board/api";

export interface IBoardParams {
  room: IRoom;
}
export const getRoomFx = GameDomain.effect<string, IRoom, Error>({
  handler: fetchRoom,
});

export const resetBoardGame = GameDomain.event();
export const boardGame$ = GameDomain.store<IRoom | null>(null)
  .on(getRoomFx.done, (_, { result }) => result)
  .on(rooms$.updates, (_, { rooms }) => {
    const updatedRoom = head(
      rooms.filter((v) => v.roomStatus === RoomStatus.PLAYING)
    );
    return updatedRoom || null;
  })
  .reset(resetBoardGame);

export const boardCompleted$ = GameDomain.store<IRoom | null>(null);
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
    userId: user$?.map((v: IUser | null) => (v ? v.userId : 0)),
    roomId: boardGame$.map((v: any) => {
      return v && v.roomId;
    }),
  }),
  target: surrenderBoardFx,
});
