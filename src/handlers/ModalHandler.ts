import { ShowModal, BoardActionType } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";
import { showModalEvent } from "../stores/ModalStore";
import { modalTypes } from "./Modals";

export const showModalHandler = async (
  content: ShowModal,
  modalType: BoardActionType
) => {
  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: content.userId,
  });
  showModalEvent(modalTypes(modalType, content));
};
