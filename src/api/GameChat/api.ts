import { IChatMessage } from "components/core/Game/GameChat/ChatMessage";
import { IChatMessageRequest } from "stores/Game/Chat/GameChatModel";
import { client } from "http/client";

const url = `/chat`;
export const fetchChat = async ({
  message,
  replies,
}: IChatMessageRequest): Promise<IChatMessage[]> => {
  return await (await client.post(url, { message, replies })).data;
};
