import { ShowModal, BoardActionType } from "../../models/types/BoardTypes";
import { setCurrentActionEvent } from "../../../stores/BoardActionStore";
import { setBoardModalEvent } from "../../../stores/BoardModalStore";
import { rollDicesModal } from "./Modals";

export const showModalHandler = async (act: ShowModal) => {
  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: act.userId,
  });
  setBoardModalEvent(rollDicesModal(act));
};
