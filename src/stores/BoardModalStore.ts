import { GameDomain } from "./BoardStore";
import { ShowModal, BoardActionType } from "../core/models/types/BoardTypes";
import nanoid from "nanoid";

const BoardModalDomain = GameDomain.domain("ModalDomain");
export const resetBoardModalEvent = BoardModalDomain.event();

const init: ShowModal = {
  type: BoardActionType.SHOW_MODAL,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: nanoid(4),
};

export const setBoardModalEvent = BoardModalDomain.event<ShowModal>();

export const boardModalStore = BoardModalDomain.store<ShowModal>(init)
  .on(setBoardModalEvent, (_, data) => data)
  .reset(resetBoardModalEvent);