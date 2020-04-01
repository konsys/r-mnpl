import { GameDomain } from "./BoardStore";
import { rollDicesEffect } from "../models/DicesStore";

const BoardModalDomain = GameDomain.domain("ModalDomain");
export const resetBoardModalEvent = BoardModalDomain.event();

interface ActionButtons {
  title: string;
  onClick: () => void;
}

export interface IModalStore {
  userId: number;
  title: string;
  text: string;
  actionButtons?: ActionButtons[];
}

const init: IModalStore = {
  userId: 1,
  title: "Бросить кубики",
  text: "Мы болеем за вас",
  actionButtons: [
    {
      title: "Бросить кубики",
      onClick: () => {
        rollDicesEffect({});
      }
    }
  ]
};

export const setBoardModalEvent = BoardModalDomain.event<IModalStore>();

export const boardModalStore = BoardModalDomain.store<IModalStore>(init)
  .on(setBoardModalEvent, (_, data) => data)
  .reset(resetBoardModalEvent);
