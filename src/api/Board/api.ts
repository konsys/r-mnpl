import { IGameActionRequest } from "../../types/types";
import { client } from "../../http/client";

const URL = `/board/action`;

export async function fetchBoardAction(data: IGameActionRequest): Promise<any> {
  return await (await client.post(URL, { data })).data;
}

export const surrenderBoardFetch = async ({
  userId,
  roomId,
}: {
  userId: number;
  roomId: string;
}): Promise<boolean> => {
  return await (await client.post(`board/surrender`, { userId, roomId })).data;
};
