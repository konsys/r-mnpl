import { GameDomain } from "./BoardStore";

const BoardModalDomain = GameDomain.domain("ModalDomain");
export const resetBoardModalEvent = BoardModalDomain.event();

interface ActionButtons {
  title: string;
  onClick: () => void;
}

export interface IModalMStore {
  isVisible: boolean;
  userId: number;
  title: string;
  text: string;
  actionButtons?: ActionButtons[];
}

const init: IModalMStore = { userId: 0, title: "", text: "", isVisible: false };

export const setBoardModalEvent = BoardModalDomain.event<IModalMStore>();

export const boardModalStore = BoardModalDomain.store(init)
  .on(setBoardModalEvent, (_, data) => data)
  .reset(resetBoardModalEvent);
