import { GameDomain } from "./UserStore";
import { sample } from "effector";

export enum RoomPortalFieldType {
  PORTAL = "Portal",
  NOP = "Empty field",
  ROULETTE = "Roulette",
  RUSSIAN_ROULETTE = "Russian roulette",
}

export enum RoomType {
  REGULAR = "regular",
  RETRO = "retro",
  SHUFFLE = "shuffle",
  QUICK = "quick",
  ROULETTE = "roulette",
}

export enum RoomTypeName {
  REGULAR = "Regular game",
  RETRO = "Retro",
  SHUFFLE = "GMS Shuffle",
  QUICK = "Quick game",
  ROULETTE = "Russian roulette",
}

export interface IRoomState {
  roomId: number;
  creatorId: number;
  playersId: number[];
  createTime: Date;
  roomType: RoomType;
  playersNumber: number;
  autostart: boolean;
  privateRoom: boolean;
  restarts: boolean;
  portalType: RoomPortalFieldType;
}

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
