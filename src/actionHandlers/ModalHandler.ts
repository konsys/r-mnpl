import { rollDicesModal } from "./Modals";
import { ShowModal, BoardActionType } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";
import { setBoardModalEvent } from "../stores/BoardModalStore";

export const showModalHandler = async (act: ShowModal) => {
  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: act.userId,
  });
  setBoardModalEvent(rollDicesModal(act));
};
