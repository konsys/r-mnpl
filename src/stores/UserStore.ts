import { BoardDomain } from "./MainStore";
import { IUser } from "../components/views/Players/Players";

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
  .on(setUserEvent, (_, data) => {
    console.log("setUserEvent", data);
  })
  .reset(resetUserEvent);
