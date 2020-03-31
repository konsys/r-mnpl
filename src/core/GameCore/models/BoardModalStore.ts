import { GameDomain } from "./BoardStore";

const BoardModalDomain = GameDomain.domain("ModalDomain");
export const resetBoardModalEvent = BoardModalDomain.event();

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

export const setBoardModalEvent = BoardModalDomain.event<IModalMStore>();

export const boardModalStore = BoardModalDomain.store(init)
  .on(setBoardModalEvent, (_, data) => data)
  .reset(resetBoardModalEvent);

boardModalStore.watch(v => console.log("boardModalStore", boardModalStore));

const modal: IModalMStore = {
  userId: 1,
  title: "Бросайте кубики",
  text: "Мы болеем за вас",
  actionButtons: [
    {
      title: "Бросить кубики",
      onClick: () => console.log("click")
    }
  ]
};
setBoardModalEvent(modal);
