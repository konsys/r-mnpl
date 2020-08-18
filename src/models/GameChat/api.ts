import { IChatMessage } from "../../components/core/Game/GameChat/ChatMessage";
import { client } from "../../http/client";

const url = `/chat`;
export const fetchChat = async (ids?: number[]): Promise<IChatMessage[]> => {
  return await (await client.get(url, { params: { ids } })).data;
};
