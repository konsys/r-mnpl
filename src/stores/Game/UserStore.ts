import { IUser } from "../../types/types";
import { MainDomain } from "../Board/BoardDomain";
import { createGate } from "effector-react";
import { fetchUserProfile } from "../../api/Users/api";
import { sample } from "effector";

export const GameDomain = MainDomain.domain("GameDomain");

const UserDomain = GameDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

export const profileGate = createGate<any>();

export const getUserFx = UserDomain.effect<string, IUser, Error>({
  handler: fetchUserProfile,
});

sample({
  clock: profileGate.open,
  source: profileGate.state,
  fn: () => "me",
  target: getUserFx,
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
  .on(getUserFx.done, (_, data) => data.result)
  .reset(resetUserEvent);

// userStore.updates.watch((v) => console.log("userStore.updates.watch", v));
