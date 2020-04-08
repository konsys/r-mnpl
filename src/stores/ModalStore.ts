import { MainDomain } from "./MainStore";
import { ShowModal, BoardActionType } from "../types/BoardTypes";
import nanoid from "nanoid";

const ModalDomain = MainDomain.domain("ModalDomain");
export const resetModalEvent = ModalDomain.event();

const init: ShowModal = {
  type: BoardActionType.SHOW_MODAL,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: nanoid(4),
};

export const setModalEvent = ModalDomain.event<ShowModal>();

export const modalStore = ModalDomain.store<ShowModal>(init)
  .on(setModalEvent, (_, data) => data)
  .reset(resetModalEvent);
