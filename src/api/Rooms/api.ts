import {
  IAddPlayerToRoom,
  IRoomResponce,
  IRoom,
} from "../../stores/Game/Rooms/RoomsModel";

import { IApiResponceCode } from "types/types";
import { client } from "http/client";

const roomsUrl = `/rooms`;

export const fetchRooms = async (): Promise<IRoomResponce> => {
  return await (await client.get(roomsUrl)).data;
};

export const createRoomFetch = async (
  params: IRoom
): Promise<IApiResponceCode> => {
  return await (await client.post(roomsUrl, { room: params })).data;
};

export const addPlayerToRoomFetch = async (
  params?: IAddPlayerToRoom
): Promise<IApiResponceCode> => {
  return await (await client.post(`${roomsUrl}/addPlayer`, { add: params }))
    .data;
};

export const removePlayerFromRoomFetch = async (
  params?: IAddPlayerToRoom
): Promise<IApiResponceCode> => {
  return await (
    await client.post(`${roomsUrl}/removePlayer`, { remove: params })
  ).data;
};

export const fetchRoom = async (gameId: string): Promise<IRoom> => {
  return await (await client.get(`/rooms/${gameId}`)).data;
};
