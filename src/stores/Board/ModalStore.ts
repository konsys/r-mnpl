import { BoardAction, IncomeMessageType } from "../types/types";

import { BoardDomain } from "./BoardDomain";

const ModalDomain = BoardDomain.domain("ModalDomain");

export const resetModalEvent = ModalDomain.event();

const init: BoardAction = {
  type: IncomeMessageType.DO_NOTHING,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: "",
  isModal: false,
};

export const showModalEvent = ModalDomain.event<BoardAction>();

export const modalStore = ModalDomain.store<BoardAction>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(resetModalEvent);
