import { GameDomain, userStore } from "../UserStore";
import { closeGameModal, openGameModal } from "../GameModal/GameModalStore";
import { combine, sample } from "effector";

import { ErrorCode } from "utils/errors";
import { createRoomFetch } from "./api";
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

export const createRoomFx = RoomDomain.effect<IRoomState, IRoomState[], Error>({
  handler: createRoomFetch,
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

export const createRoom = RoomDomain.event<void>();
export const updateRoom = RoomDomain.event<IRoomState>();
export const toggleAutostart = RoomDomain.event<void>();
export const togglePrivateRoom = RoomDomain.event<void>();
export const togglRestarts = RoomDomain.event<void>();
export const toggleRoomSwitch = RoomDomain.event<string>();
export const deleteRoom = RoomDomain.event<void>();

export const newRoomStore = RoomDomain.store<IRoomState>({
  roomId: "",
  creatorId: 0,
  playersId: [],
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
  .reset(deleteRoom);

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
    playersId: [user.userId],
    roomId: `${nanoid(8)}-${Date.now()}`,
  }),

  target: createRoomFx,
});
