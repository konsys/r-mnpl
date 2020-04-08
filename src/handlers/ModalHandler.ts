import { rollDicesModal } from "./Modals";
import { ShowModal, BoardActionType } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";
import { setModalEvent } from "../stores/ModalStore";

export const showModalHandler = async (act: ShowModal) => {
  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: act.userId,
  });
  setModalEvent(rollDicesModal(act));
};
