import { GameDomain } from "./BoardStore";

const ModalDomain = GameDomain.domain("ModalDomain");
export const resetModalEvent = ModalDomain.event();

interface ActionButtons {
  title: string;
  onClick: () => void;
}

export interface IModalMStore {
  userId: number;
  title: string;
  text: string;
  actionButtons?: ActionButtons[];
}

const init: IModalMStore = { userId: 0, title: "", text: "" };

export const setModalEvent = ModalDomain.event<IModalMStore>();

export const modalStore = ModalDomain.store(init)
  .on(setModalEvent, (_, data) => {
    console.log("setModalEvent", data);
  })
  .reset(resetModalEvent);
