import { GameDomain } from "../User/UserModel";
import { IChatMessage } from "components/core/Game/GameChat/ChatMessage";
import { IUser } from "types/types";
import { createGate } from "effector-react";
import { fetchChat } from "api/GameChat/api";
import { fetchChatMessages } from "./api";

const ChatDomain = GameDomain.domain("ChatDomain");

export interface IChatMessageRequest {
  message: string;
  replies: IUser[];
}

export const chatGate = createGate();

export const resetChatEvent = ChatDomain.event();

export const sendChatMessageEffect = ChatDomain.effect<
  IChatMessageRequest,
  IChatMessage[]
>({
  handler: fetchChat,
});

export const setChatMessages = ChatDomain.event<IChatMessage[]>();

export const getChatMessagesFx = ChatDomain.effect<void, IChatMessage[]>({
  name: "getChatMessagesFx",
  handler: fetchChatMessages,
});

export const chatStore = ChatDomain.store<IChatMessage[]>([])
  .on(setChatMessages, (_, v) => v)
  .on(getChatMessagesFx.done, (_, { result }) => result)
  .reset(chatGate.close);

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

chatGate.open.watch(() => getChatMessagesFx());
