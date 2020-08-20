import { GameDomain } from "./UserStore";
import { IChatMessage } from "../../components/core/Game/GameChat/ChatMessage";
import { IUser } from "../../types/types";
import { fetchChat } from "../../models/GameChat/api";
import { merge } from "lodash";

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
    console.log("addReplyToEvent", merge(prev, [v]));
    return merge(prev, [v]);
  })
  .on(deleteReplyToEvent, (prev, v) =>
    prev.filter((user) => user.userId !== v.userId)
  )
  .reset(resetReplyToEvent);

replyStore.watch((v) => console.log("replyStoreWatch", v));
