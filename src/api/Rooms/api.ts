import {
  IAddPlayerToRoom,
  IRoomResponce,
  IRoomState,
} from "../../stores/Game/Rooms/RoomsModel";

import { IResponceCode } from "types/types";
import { client } from "http/client";

const roomsUrl = `/rooms`;

export const fetchRooms = async (): Promise<IRoomResponce> => {
  return await (await client.get(roomsUrl)).data;
};

export const createRoomFetch = async (
  params: IRoomState
): Promise<IResponceCode> => {
  return await (await client.post(roomsUrl, { room: params })).data;
};

export const addPlayerToRoomFetch = async (
  params?: IAddPlayerToRoom
): Promise<IResponceCode> => {
  return await (await client.post(`${roomsUrl}/addPlayer`, { add: params }))
    .data;
};

export const removePlayerFromRoomFetch = async (
  params?: IAddPlayerToRoom
): Promise<IResponceCode> => {
  return await (
    await client.post(`${roomsUrl}/removePlayer`, { remove: params })
  ).data;
};

export const fetchRoom = async (gameId: string): Promise<IRoomState> => {
  return await (await client.get(`/rooms/${gameId}`)).data;
};
