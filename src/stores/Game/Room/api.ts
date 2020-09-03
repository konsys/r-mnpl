import { IAddPlayerToRoom, IRoomResponce, IRoomState } from "./NewRoomStore";

import { client } from "http/client";

const createameUrl = `/rooms`;

export const createRoomFetch = async (
  params: IRoomState
): Promise<IRoomResponce> => {
  return await (await client.post(createameUrl, { room: params })).data;
};

export const addPlayerToRoomFetch = async (
  params?: IAddPlayerToRoom
): Promise<IRoomResponce> => {
  return await (await client.post(`${createameUrl}/addPlayer`, { add: params }))
    .data;
};
