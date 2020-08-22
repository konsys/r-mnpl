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

export interface IReply {
  n: number;
  users: IUser[];
}
export const replyStore = ChatDomain.store<IReply>({ n: 0, users: [] })
  .on(addReplyToEvent, (prev, v) => {
    const users = prev.users.filter((user) => user.userId !== v.userId);
    users.push(v);
    return { n: users.length, users };
  })
  .on(deleteReplyToEvent, (prev, v) => {
    const r = prev ? prev.users.filter((user) => user.userId !== v.userId) : [];
    return {
      n: r ? r.length : 0,
      users: r ? r : [],
    };
  })
  .reset(resetReplyToEvent);

replyStore.watch((v) => console.log("replyStoreWatch", v));
