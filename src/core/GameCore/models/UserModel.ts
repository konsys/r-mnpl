import { GameDomain } from "./BoardStore";
import { IUser } from "../../../components/Players/Players";

const UserDomain = GameDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

const init: IUser = {
  userId: 1,
  name: "Konstantin",
  vip: true,
  isActive: true,
  isBlocked: false
};

export const setUserEvent = UserDomain.event<IUser>();

export const modalStore = UserDomain.store(init)
  .on(setUserEvent, (_, data) => {
    console.log("setUserEvent", data);
  })
  .reset(resetUserEvent);
