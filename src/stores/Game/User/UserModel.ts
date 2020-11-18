import { IUser } from "types/types";
import { MainDomain } from "../../Board/BoardDomain";
import { createGate } from "effector-react";
import { fetchUserProfile } from "api/Users/api";
import { sample } from "effector";

export const GameDomain = MainDomain.domain("GameDomain");

const UserDomain = GameDomain.domain("UserDomain");

export const ProfileGate = createGate();

export const getUserFx = UserDomain.effect<string, IUser, Error>({
  handler: fetchUserProfile,
});

export const getMyProfile = UserDomain.event();
export const logout = UserDomain.event();

getMyProfile.watch(() => {
  getUserFx("me");
});

sample({
  clock: ProfileGate.open,
  source: ProfileGate.state,
  fn: () => "me",
  target: getUserFx,
});

export const setUser = UserDomain.event<IUser | null>();

export const user$ = UserDomain.store<IUser | null>(null)
  .on(setUser, (_, data) => data)
  .on(getUserFx.done, (_, data) => data.result)
  .reset(logout);

// user$.updates.watch((v) => console.log("user$.updates.watch", v));
