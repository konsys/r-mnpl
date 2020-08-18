import { GameDomain } from "./UserStore";
import { IChatMessage } from "../../components/core/Game/GameChat/ChatMessage";
import { fetchChat } from "../../models/GameChat/api";

const ChatDomain = GameDomain.domain("ChatDomain");

export const resetChatEvent = ChatDomain.event();

export const sendChatMessageEffect = ChatDomain.effect<any, IChatMessage[]>({
  handler: fetchChat,
});

export const setChatEvent = ChatDomain.event<IChatMessage>();

export const chatStore = ChatDomain.store<IChatMessage[]>([]).on(
  sendChatMessageEffect.done,
  (_, v) => v.result
);

chatStore.watch((v) => console.log(2222, v));