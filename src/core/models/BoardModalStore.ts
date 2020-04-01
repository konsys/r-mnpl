import { GameDomain } from "./BoardStore";
import { rollDicesEffect } from "../models/DicesStore";

const BoardModalDomain = GameDomain.domain("ModalDomain");
export const resetBoardModalEvent = BoardModalDomain.event();

interface ActionButtons {
  title: string;
  onClick: () => void;
}

export interface IModalStore {
  isVisible: boolean;
  userId: number;
  title: string;
  text: string;
  actionButtons?: ActionButtons[];
}

const init: IModalStore = {
  isVisible: true,
  userId: 1,
  title: "Покупаем?",
  text:
    "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион.",
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

export const boardModalStore = BoardModalDomain.store(init)
  .on(setBoardModalEvent, (_, data) => data)
  .reset(resetBoardModalEvent);
