import { IChatMessage } from "components/core/Game/GameChat/ChatMessage";
import { client } from "http/client";

export const fetchChatMessages = async (): Promise<IChatMessage[]> =>
  await (await client.get(`/chat`)).data;
