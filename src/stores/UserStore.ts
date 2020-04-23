import { BoardDomain } from "./BoardDomain";
import { IUser } from "../types/BoardTypes";

const UserDomain = BoardDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

const init: IUser = {
  userId: 1,
  name: "Konstantin",
  vip: true,
  isActive: true,
  isBlocked: false,
};

export const setUserEvent = UserDomain.event<IUser>();

export const userStore = UserDomain.store(init)
  .on(setUserEvent, (_, data) => data)
  .reset(resetUserEvent);
