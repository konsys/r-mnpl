import {
  IRoomState,
  RoomPortalFieldType,
  RoomType,
} from "components/core/Game/FindGames/FindGame";

import { GameDomain } from "./UserStore";
import { sample } from "effector";

const RoomDomain = GameDomain.domain("ChatDomain");

export const createRoom = RoomDomain.event<void>();
export const updateRoom = RoomDomain.event<IRoomState>();
export const deleteRoom = RoomDomain.event<void>();

export const newRoomStore = RoomDomain.store<IRoomState>({
  roomId: 0,
  creatorId: 0,
  playersId: [],
  createTime: new Date(),
  roomType: RoomType.REGULAR,
  autostart: true,
  restarts: false,
  playersNumber: 4,
  privateRoom: false,
  portalType: RoomPortalFieldType.ROULETTE,
})
  .on(createRoom, (v) => v)
  .on(updateRoom, (v) => v)
  .reset(deleteRoom);

sample({
  clock: createRoom,
  source: newRoomStore.map((v) => v),
  target: updateRoom,
});
