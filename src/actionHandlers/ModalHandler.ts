import { rollDicesModal } from "./Modals";
import { ShowModal, BoardActionType } from "../core/models/types/BoardTypes";
import { setCurrentActionEvent } from "../stores/BoardActionStore";
import { setBoardModalEvent } from "../stores/BoardModalStore";

export const showModalHandler = async (act: ShowModal) => {
  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: act.userId,
  });
  setBoardModalEvent(rollDicesModal(act));
};
