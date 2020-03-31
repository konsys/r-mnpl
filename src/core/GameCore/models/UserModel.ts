import { GameDomain } from "./BoardStore";

export interface IUserMStore {
  userId: number;
  name: string;
}

const UserDomain = GameDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

const init: IUserMStore = { userId: 1, name: "rjycnfynby" };

export const setModalEvent = ModalDomain.event<IModalMStore>();

export const modalStore = ModalDomain.store(init)
  .on(setModalEvent, (_, data) => {
    console.log("setModalEvent", data);
  })
  .reset(resetModalEvent);
