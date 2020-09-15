import { IGameActionRequest } from "../../types/types";
import { client } from "../../http/client";

const URL = `/game/action`;

export async function fetchGameAction(data: IGameActionRequest): Promise<any> {
  return await (await client.post(URL, { data })).data;
}

export const surrenderBoardFetch = async ({
  userId,
  roomId,
}: {
  userId: number;
  roomId: string;
}): Promise<boolean> => {
  return await (await client.post(`rooms/surrender`, { userId, roomId })).data;
};
