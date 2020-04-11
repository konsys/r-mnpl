import { BoardDomain } from "./MainStore";
import { ShowModal, BoardActionType } from "../types/BoardTypes";
import nanoid from "nanoid";

const ModalDomain = BoardDomain.domain("ModalDomain");

// actionsStore.watch((action: ICurrentAction) => {

//   action.
// })
export const reshowModalEvent = ModalDomain.event();

const init: ShowModal = {
  type: BoardActionType.SHOW_MODAL,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: nanoid(4),
};

export const showModalEvent = ModalDomain.event<ShowModal>();

export const modalStore = ModalDomain.store<ShowModal>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(reshowModalEvent);
