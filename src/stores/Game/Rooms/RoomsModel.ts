import { GameDomain, user$ } from "../UserModel";
import { IApiResponceCode, IUser } from "types/types";
import {
  addPlayerToRoomFetch,
  createRoomFetch,
  fetchRooms,
  removePlayerFromRoomFetch,
} from "../../../api/Rooms/api";
import { closeGameModal, openGameModal } from "../GameModal/GameModalModel";
import { combine, sample } from "effector";

import { ErrorCode } from "utils/errors";
import { createGate } from "effector-react";
import { head } from "lodash";
import nanoid from "nanoid";

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
export enum RoomStatus {
  NOT_CREATED = "notCreated",
  PENDING = "pending",
  PLAYING = "playing",
}
export enum RoomTypeName {
  REGULAR = "Regular game",
  RETRO = "Retro",
  SHUFFLE = "GMS Shuffle",
  QUICK = "Quick game",
  ROULETTE = "Russian roulette",
}

export enum PlayerRoomStatus {
  ACITVE = "active",
  SURRENDERED = "surrendered",
}

export interface RoomPlayer extends IUser {
  playerRoomStatus: PlayerRoomStatus;
}

export interface IRoomState {
  roomId: string;
  creatorId: number;
  winnerId: RoomPlayer | null;
  players: Partial<RoomPlayer[]>;
  createTime: Date;
  roomType: RoomType;
  playersNumber: number;
  autostart: boolean;
  privateRoom: boolean;
  restarts: boolean;
  portalType: RoomPortalFieldType;
  roomStatus: RoomStatus;
}

export interface IAddPlayerToRoom {
  roomId: string;
  userId: number;
}

export interface IRoomResponce {
  playersInRooms: number;
  rooms: IRoomState[];
}

const RoomDomain = GameDomain.domain("ChatDomain");

export const roomsGate = createGate<any>();

export const setRooms = RoomDomain.event<IRoomResponce>();

export const createRoomFx = RoomDomain.effect<
  IRoomState,
  IApiResponceCode,
  Error
>({
  handler: createRoomFetch,
});

createRoomFx.fail.watch((v: any) => {
  try {
    openGameModal({
      open: true,
      title: "Oops!",
      text:
        v.error.response.status === 401
          ? ErrorCode[v.error.response.status]
          : ErrorCode[v.error.response.data.code],
    });
  } catch (err) {
    closeGameModal();
  }
});

export const getRoomsFx = RoomDomain.effect<void, IRoomResponce, Error>({
  handler: fetchRooms,
});

export const addPlayerToRoomFx = RoomDomain.effect<
  IAddPlayerToRoom,
  IApiResponceCode,
  Error
>({
  handler: addPlayerToRoomFetch,
});

export const removePlayerFromRoomFx = RoomDomain.effect<
  IAddPlayerToRoom,
  IApiResponceCode,
  Error
>({
  handler: removePlayerFromRoomFetch,
});

addPlayerToRoomFx.fail.watch((v: any) => {
  try {
    openGameModal({
      open: true,
      title: "Oops!",
      text: ErrorCode[v.error.response.data.code] || "Unknown error",
    });
  } catch (err) {
    closeGameModal();
  }
});

export const createRoom = RoomDomain.event<void>();

export const updateRoom = RoomDomain.event<IRoomState>();
export const myRoomsReset = RoomDomain.event();
export const toggleAutostart = RoomDomain.event<void>();
export const togglePrivateRoom = RoomDomain.event<void>();
export const togglRestarts = RoomDomain.event<void>();
export const toggleRoomSwitch = RoomDomain.event<string>();
export const resetcurrentRoom$ = RoomDomain.event<void>();

export const currentRoom$ = RoomDomain.store<IRoomState>({
  roomId: "",
  creatorId: 0,
  winnerId: null,
  players: [],
  createTime: new Date(),
  roomType: RoomType.REGULAR,
  playersNumber: 4,
  portalType: RoomPortalFieldType.ROULETTE,
  autostart: true,
  restarts: false,
  privateRoom: false,
  roomStatus: RoomStatus.NOT_CREATED,
})
  .on(updateRoom, (_, v) => v)

  .on(toggleAutostart, (state) => ({
    ...state,
    autostart: !state.autostart,
  }))
  .on(togglePrivateRoom, (state) => ({
    ...state,
    privateRoom: !state.privateRoom,
  }))
  .on(togglRestarts, (state) => ({
    ...state,
    restarts: !state.restarts,
  }))
  .reset(resetcurrentRoom$);

sample({
  clock: toggleRoomSwitch,
  source: toggleRoomSwitch,
  fn: (name) => {
    switch (name) {
      case "autostart":
        toggleAutostart();
        break;
      case "privateRoom":
        togglePrivateRoom();
        break;
      case "restarts":
        togglRestarts();
        break;
    }
  },
});

sample({
  clock: createRoom,
  source: combine({
    room: currentRoom$.map((v) => v),
    user:
      user$ &&
      user$.map((v: IUser | null) => {
        return v
          ? {
              ...v,
              playerRoomStatus: PlayerRoomStatus.ACITVE,
            }
          : null;
      }),
  }),
  fn: ({ room, user }) => ({
    ...room,
    creatorId: user ? user.userId : 0,
    players: user ? [user] : [],
    roomId: `${nanoid(4)}-${Date.now()}`,
  }),

  target: createRoomFx,
});

export const resetRoomsStore = RoomDomain.event();
export const rooms$ = RoomDomain.store<IRoomResponce>({
  playersInRooms: 0,
  rooms: [],
})
  .reset(resetRoomsStore)
  .on(getRoomsFx.done, (_, { result }) => result)
  .on(setRooms, (_, result) => result);

export const myPendingRoom$ = RoomDomain.store<IRoomState | null>(null)
  .on(rooms$.updates, (_, { rooms }) => {
    const user = user$.getState();
    const updatedRoom = head(
      rooms.filter(
        (v) =>
          v.roomStatus === RoomStatus.PENDING &&
          v.players.some((v1) => user && v1?.userId === user.userId)
      )
    );
    return updatedRoom || null;
  })
  .reset(myRoomsReset);

sample({
  clock: roomsGate.open,
  source: roomsGate.state,
  target: getRoomsFx,
});
