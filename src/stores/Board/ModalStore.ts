import { BoardAction, IncomeMessageType } from "../../types/types";

import { BoardDomain } from "./BoardDomain";

const ModalDomain = BoardDomain.domain("ModalDomain");

export const resetBoardActionModal = ModalDomain.event();

export const initBoardAction: BoardAction = {
  type: IncomeMessageType.DO_NOTHING,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: "",
  isModal: false,
};

export const showBoardActionModal = ModalDomain.event<BoardAction>();

export const boardModal$ = ModalDomain.store<BoardAction>(initBoardAction)
  .on(showBoardActionModal, (_, data) => data)
  .reset(resetBoardActionModal);

// boardModal$.watch(console.log);
