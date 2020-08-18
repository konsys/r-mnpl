import { BoardDomain } from "../Board/BoardDomain";
import { IUser } from "../../types/types";
const UserDomain = BoardDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

export const getUserEffect = UserDomain.effect<string, IUser, Error>({
  handler: profile,
});

export const setUserEvent = UserDomain.event<IUser>();

export const userStore = UserDomain.store<IUser>({
  isActive: false,
  isBlocked: false,
  name: "",
  userId: -1,
  vip: false,
  avatar: "",
  createdAt: new Date(),
  registrationType: "",
  team: undefined,
  updatedAt: new Date(),
})
  .on(setUserEvent, (_, data) => data)
  .on(getUserEffect.done, (_, data) => data.result)
  .reset(resetUserEvent);

// userStore.updates.watch((v) => console.log("userStore.updates.watch", v));
