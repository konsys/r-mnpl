import { GameDomain } from "./UserStore";
import { IChatMessage } from "../../components/core/Game/GameChat/ChatMessage";
import { IUser } from "../../types/types";
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

export const addReplyToEvent = ChatDomain.event<IUser>();
export const deleteReplyToEvent = ChatDomain.event<IUser>();
export const resetReplyToEvent = ChatDomain.event();

export const replyStore = ChatDomain.store<IUser[]>([])
  .on(addReplyToEvent, (prev, v) => {
    prev.push(v);
    return prev;
  })
  .on(addReplyToEvent, (prev, v) => {
    return prev.filter((user) => user.userId !== v.userId);
  })
  .reset(resetReplyToEvent);
