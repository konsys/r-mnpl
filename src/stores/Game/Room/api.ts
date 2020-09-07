import { IAddPlayerToRoom, IRoomResponce, IRoomState } from "./RoomStore";

import { client } from "http/client";

const roomsUrl = `/rooms`;

export const fetchRooms = async (): Promise<IRoomResponce> => {
  return await (await client.get(roomsUrl)).data;
};

export const createRoomFetch = async (
  params: IRoomState
): Promise<IRoomResponce> => {
  return await (await client.post(roomsUrl, { room: params })).data;
};

export const addPlayerToRoomFetch = async (
  params?: IAddPlayerToRoom
): Promise<IRoomResponce> => {
  return await (await client.post(`${roomsUrl}/addPlayer`, { add: params }))
    .data;
};

export const removePlayerFromRoomFetch = async (
  params?: IAddPlayerToRoom
): Promise<IRoomResponce> => {
  return await (
    await client.post(`${roomsUrl}/removePlayer`, { remove: params })
  ).data;
};
