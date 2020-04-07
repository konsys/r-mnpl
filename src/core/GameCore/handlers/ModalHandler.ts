import { ShowModal, BoardActionType } from "../../models/types/BoardTypes";
import { setCurrentActionEvent } from "../../models/BoardActionStore";
import { setBoardModalEvent } from "../../models/BoardModalStore";
import { rollDicesModal } from "./Modals";

export const showModalHandler = async (act: ShowModal) => {
  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: act.userId,
  });
  setBoardModalEvent(rollDicesModal(act));
};
