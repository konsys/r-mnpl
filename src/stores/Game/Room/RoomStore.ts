import { GameDomain, userStore } from "../UserStore";
import {
  addPlayerToRoomFetch,
  createRoomFetch,
  fetchRooms,
  removePlayerFromRoomFetch,
} from "./api";
import { closeGameModal, openGameModal } from "../GameModal/GameModalStore";
import { combine, sample } from "effector";

import { ErrorCode } from "utils/errors";
import { IUser } from "types/types";
import { createGate } from "effector-react";
import { flattenDeep } from "lodash";
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

export enum RoomTypeName {
  REGULAR = "Regular game",
  RETRO = "Retro",
  SHUFFLE = "GMS Shuffle",
  QUICK = "Quick game",
  ROULETTE = "Russian roulette",
}

export interface IRoomState {
  roomId: string;
  creatorId: number;
  players: Partial<IUser[]>;
  createTime: Date;
  roomType: RoomType;
  playersNumber: number;
  autostart: boolean;
  privateRoom: boolean;
  restarts: boolean;
  portalType: RoomPortalFieldType;
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

export const createRoomFx = RoomDomain.effect<IRoomState, IRoomResponce, Error>(
  {
    handler: createRoomFetch,
  }
);

export const getRoomsFx = RoomDomain.effect<undefined, IRoomResponce, Error>({
  handler: fetchRooms,
});

createRoomFx.fail.watch((v: any) => {
  try {
    openGameModal({
      open: true,
      title: "Oops!",
      text: ErrorCode[v.error.response.data.code],
    });
  } catch (err) {
    closeGameModal();
  }
});

export const addPlayerToRoomFx = RoomDomain.effect<
  IAddPlayerToRoom,
  IRoomResponce,
  Error
>({
  handler: addPlayerToRoomFetch,
});

export const removePlayerFromRoomFx = RoomDomain.effect<
  IAddPlayerToRoom,
  IRoomResponce,
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
export const toggleAutostart = RoomDomain.event<void>();
export const togglePrivateRoom = RoomDomain.event<void>();
export const togglRestarts = RoomDomain.event<void>();
export const toggleRoomSwitch = RoomDomain.event<string>();
export const resetRoomStore = RoomDomain.event<void>();

export const newRoomStore = RoomDomain.store<IRoomState>({
  roomId: "",
  creatorId: 0,
  players: [],
  createTime: new Date(),
  roomType: RoomType.REGULAR,
  playersNumber: 4,
  portalType: RoomPortalFieldType.ROULETTE,
  autostart: true,
  restarts: false,
  privateRoom: false,
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
  .reset(resetRoomStore);

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
    room: newRoomStore.map((v) => v),
    user: userStore,
  }),
  fn: ({ room, user }) => ({
    ...room,
    creatorId: user.userId,
    players: [user],
    roomId: `${nanoid(4)}-${Date.now()}`,
  }),

  target: createRoomFx,
});

export const resetRoomsStore = RoomDomain.event();
export const roomsStore = RoomDomain.store<IRoomResponce>({
  playersInRooms: 0,
  rooms: [],
})
  .reset(resetRoomsStore)
  .on(createRoomFx.done, (_, { result }) => result)
  .on(getRoomsFx.done, (_, { result }) => result)
  .on(addPlayerToRoomFx.done, (_, { result }) => result)
  .on(setRooms, (_, result) => result)
  .on(removePlayerFromRoomFx.done, (_, { result }) => result);

export const isWaitingForGame = sample({
  clock: roomsStore,
  source: combine({
    userId: userStore.map((v) => v.userId),
    playerIds: roomsStore.map((v) =>
      flattenDeep(
        v.rooms.map((room) => room.players.map((player) => player?.userId))
      )
    ),
  }),
  fn: ({ userId, playerIds }) => playerIds.some((v) => v === userId),
});

sample({
  clock: roomsGate.open,
  source: roomsGate.state,
  target: getRoomsFx,
});
