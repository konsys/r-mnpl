import { BoardDomain } from "./MainStore";
import { ShowDicesModal, BoardActionType } from "../types/BoardTypes";
import nanoid from "nanoid";

const ModalDomain = BoardDomain.domain("ModalDomain");

export const resetModalEvent = ModalDomain.event();

const init: ShowDicesModal = {
  type: BoardActionType.SHOW_DICES_MODAL,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: nanoid(4),
};

export const showModalEvent = ModalDomain.event<ShowDicesModal>();

export const modalStore = ModalDomain.store<ShowDicesModal>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(resetModalEvent);
