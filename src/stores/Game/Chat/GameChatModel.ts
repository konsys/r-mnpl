import { GameDomain } from "stores/Board/BoardDomain";
import { IChatMessage } from "components/core/Game/GameChat/ChatMessage";
import { IUser } from "types/types";
import { createGate } from "effector-react";
import { postChat } from "api/GameChat/api";
import { getChatMessages } from "api/Chat/api";
import { merge } from "lodash";

const ChatDomain = GameDomain.domain("ChatDomain");

export interface IChatMessageRequest {
  message: string;
  replies: IUser[];
}

export const chatGate = createGate();

export const setChatMessages = ChatDomain.event<IChatMessage[]>();
export const resetChatMessages = ChatDomain.event();

export const sendChatMessageFx = ChatDomain.effect<
  IChatMessageRequest,
  IChatMessage[]
>({
  handler: postChat,
});

export const getChatMessagesFx = ChatDomain.effect<void, IChatMessage[]>({
  name: "getChatMessagesFx",
  handler: getChatMessages,
});

export const gameChat$ = ChatDomain.store<IChatMessage[]>([])
  .on(setChatMessages, (_, v) => v)
  .on(getChatMessagesFx.done, (_, { result }) => result)
  .reset(merge([chatGate.close, resetChatMessages]));

export const addReplyToChatMessage = ChatDomain.event<IUser>();
export const deleteReplyToChatMessage = ChatDomain.event<IUser>();
export const resetReplyToChatMessage = ChatDomain.event();

export interface IReply {
  n: number;
  users: IUser[];
}
export const repliesToChatMessage$ = ChatDomain.store<IReply>({
  n: 0,
  users: [],
})
  .on(addReplyToChatMessage, (prev, v) => {
    const users = prev.users.filter((user) => user.userId !== v.userId);
    users.push(v);
    return { n: users.length, users };
  })
  .on(deleteReplyToChatMessage, (prev, v) => {
    const r = prev ? prev.users.filter((user) => user.userId !== v.userId) : [];
    return {
      n: r ? r.length : 0,
      users: r ? r : [],
    };
  })
  .reset(resetReplyToChatMessage);

chatGate.open.watch(() => getChatMessagesFx());
