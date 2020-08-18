import { IChatMessage } from "../../components/core/Game/GameChat/ChatMessage";
import { client } from "../../http/client";

const url = `/chat`;
export const fetchChat = async (message: string): Promise<IChatMessage[]> => {
  return await (await client.post(url, { message })).data;
};
