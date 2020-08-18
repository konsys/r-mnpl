import { GameDomain } from "./UserStore";
import { fetchChat } from "../../models/GameChat/api";

export const r = "wsfwef";

const ChatDomain = GameDomain.domain("ChatDomain");


export const resetChatEvent = ChatDomain.event();

export const getChatEffect = ChatDomain.effect<any, any>({
  handler: fetchChat,
});

export const setChatEvent = ChatDomain.event<any>();

export const chatStore = ChatDomain.store<any>({
  isActive: false,
  isBlocked: false,
  name: "",
  userId: -1,
  vip: false,
  avatar: "",
  createdAt: new Date(),
  registrationType: "",
  team: undefined,
  