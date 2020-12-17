import { GameDomain, user$ } from "../User/UserModel";
import { IApiResponceCode, IUser } from "types/types";
import {
  addPlayerToRoomFetch,
  createRoomFetch,
  fetchRooms,
  removePlayerFromRoomFetch,
} from "../../../api/Rooms/api";
import { closeGameModal, openGameModal } from "../GameModal/GameModalModel";
import { combine, merge, sample } from "effector";

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
      title: "Oops!",
      text: ErrorCode[v.error.response.data.code] || "Unknown error",
    });
  } catch (err) {
    closeGameModal();
  }
});

export const createRoom = RoomDomain.event<void>();

export const updatePreparatoryRoom = RoomDomain.event<IRoomState>();
export const myRoomsReset = RoomDomain.event();
export const toggleAutostart = RoomDomain.event<void>();
export const togglePrivateRoom = RoomDomain.event<void>();
export const togglRestarts = RoomDomain.event<void>();
export const toggleRoomSwitch = RoomDomain.event<string>();
export const resetCurrentRoom = RoomDomain.event<void>();

export const initPreparatoryRoom = {
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
};

export const preparatoryRoom$ = RoomDomain.store<IRoomState>(
  initPreparatoryRoom
)
  .on(updatePreparatoryRoom, (_, v) => v)

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
  .reset(resetCurrentRoom);

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
    room: preparatoryRoom$.map((v) => v),
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
  .on(getRoomsFx.done, (_, { result }) => result)
  .on(setRooms, (_, result) => result)
  .reset(resetRoomsStore);

const setMyPendingRoom = RoomDomain.event<IRoomState | null>();

export const myPendingRoom$ = RoomDomain.store<IRoomState | null>(null)
  .on(setMyPendingRoom, (_, v) => v)
  .reset(myRoomsReset);

sample({
  source: [rooms$, user$],
  clock: merge([rooms$.updates, user$.updates]),
  fn: (source: [IRoomResponce, IUser]) => {
    const updatedRoom =
      Array.isArray(source) && source.length === 2
        ? head(
            source[0].rooms.filter(
              (v: IRoomState) =>
                v.roomStatus === RoomStatus.PENDING &&
                v.players.some(
                  (v1: any) => source[1] && v1?.userId === source[1].userId
                )
            )
          ) || null
        : null;
    return updatedRoom;
  },
  target: setMyPendingRoom,
});

sample({
  clock: roomsGate.open,
  source: roomsGate.state,
  target: getRoomsFx,
});
