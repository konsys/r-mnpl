import { IUser } from "../../../types/types";
import { MainDomain } from "../../Board/BoardDomain";
import { createGate } from "effector-react";
import { fetchUserProfile } from "../../../api/Users/api";
import { logout } from "../../../components/core/Registration/Login/model/LoginModel";
import { sample } from "effector";

export const GameDomain = MainDomain.domain("GameDomain");

const UserDomain = GameDomain.domain("UserDomain");

export const ProfileGate = createGate<any>();

export const getUserFx = UserDomain.effect<string, IUser, Error>({
  handler: fetchUserProfile,
});

export const getMyProfile = UserDomain.event();

getMyProfile.watch(() => {
  getUserFx("me");
});

sample({
  clock: ProfileGate.open,
  source: ProfileGate.state,
  fn: () => "me",
  target: getUserFx,
});

export const setUserEvent = UserDomain.event<IUser>();

export const user$ = UserDomain.store<IUser | null>(null)
  .on(setUserEvent, (_, data) => data)
  .on(getUserFx.done, (_, data) => data.result)
  .reset(logout);

// user$.updates.watch((v) => console.log("user$.updates.watch", v));
