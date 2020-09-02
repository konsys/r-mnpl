import { BoardAction, IncomeMessageType } from "../../types/types";

import { BoardDomain } from "./BoardDomain";

const ModalDomain = BoardDomain.domain("ModalDomain");

export const resetBoardModalEvent = ModalDomain.event();

const init: BoardAction = {
  type: IncomeMessageType.DO_NOTHING,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: "",
  isModal: false,
};

export const showBoardModalEvent = ModalDomain.event<BoardAction>();

export const boardModalStore = ModalDomain.store<BoardAction>(init)
  .on(showBoardModalEvent, (_, data) => data)
  .reset(resetBoardModalEvent);
