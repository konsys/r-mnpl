import { BoardDomain } from "./BoardDomain";
import { IUser } from "../types/types";
import { profile } from "../models/Users/api";

const UserDomain = BoardDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

export const getUserEffect = UserDomain.effect<string, IUser, Error>({
  handler: profile,
});

export const setUserEvent = UserDomain.event<IUser>();

export const userStore = UserDomain.store<IUser | null>(null)
  .on(setUserEvent, (_, data) => data)
  .on(getUserEffect.done, (_, data) => data.result)
  .reset(resetUserEvent);

// userStore.updates.watch((v) => console.log("userStore.updates.watch", v));
