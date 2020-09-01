import { IRoomState } from "./NewRoomStore";
import { client } from "http/client";

const createameUrl = `/rooms`;

export const createRoomFetch = async (params?: any): Promise<IRoomState> => {
  return await (await client.post(createameUrl, { room: params })).data;
};
