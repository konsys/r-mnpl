import { BoardDomain } from "./BoardDomain";
import { IUser } from "../types/types";

const UserDomain = BoardDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

export const setUserEvent = UserDomain.event<IUser>();

export const userStore = UserDomain.store<IUser | null>(null)
  .on(setUserEvent, (_, data) => data)
  .reset(resetUserEvent);
