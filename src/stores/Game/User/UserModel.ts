import { IUser } from "types/types";
import { MainDomain } from "../../Board/BoardDomain";
import { createGate } from "effector-react";
import {
  fetchUserProfile,
  fetchRefreshToken,
  fetchLogout,
  fetchMyProfile,
} from "api/Users/api";
import { merge, sample } from "effector";
import {
  clearToken,
  getRefreshToken,
  saveToken,
  clearRefreshToken,
} from "../Token/TokenModel";

export const GameDomain = MainDomain.domain("GameDomain");

const UserDomain = GameDomain.domain("UserDomain");

export const ProfileGate = createGate();

export const getProfileFx = UserDomain.effect<number, IUser, Error>({
  handler: fetchUserProfile,
});

export const clearProfile = UserDomain.event();

export const profile$ = UserDomain.store<IUser | null>(null)
  .on(getProfileFx.done, (_, { result }) => result)
  .reset(clearProfile);

export const getUserFx = UserDomain.effect<void, IUser, Error>({
  handler: fetchMyProfile,
});

export const logoutFx = UserDomain.effect<string, boolean, Error>({
  handler: fetchLogout,
});

export const refreshTokenFx = UserDomain.effect<
  string,
  { accessToken: string },
  Error
>({
  handler: fetchRefreshToken,
});

refreshTokenFx.done.watch(({ result }) => {
  saveToken(result.accessToken);
});

export const getMyProfile = UserDomain.event();

export const logout = UserDomain.event();
// TODO test in getMyProfile call getUserFx
sample({
  clock: merge([ProfileGate.open, getMyProfile]),
  source: ProfileGate.state,
  fn: () => undefined,
  target: getUserFx,
});

sample({
  clock: logout,
  source: ProfileGate.state,
  fn: () => {
    const token = getRefreshToken();
    clearRefreshToken();
    clearToken();
    return token || "";
  },
  target: logoutFx,
});

export const setUser = UserDomain.event<IUser | null>();

export const user$ = UserDomain.store<IUser | null>(null)
  .on(setUser, (_, data) => data)
  .on(getUserFx.done, (_, { result }) => result)
  .reset(logout);

// user$.updates.watch((v) => console.log("user$.updates.watch", v));
