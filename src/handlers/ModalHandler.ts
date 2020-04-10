import { ShowModal, BoardActionType } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";
import { setModalEvent } from "../stores/ModalStore";
import { modalTypes } from "./Modals";

export const showModalHandler = async (
  content: ShowModal,
  modalType: BoardActionType
) => {
  console.log(234234234, modalType);
  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: content.userId,
  });
  setModalEvent(modalTypes(modalType, content));
};
