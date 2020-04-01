import { ShowModal, BoardActionType } from "../../models/types/BoardTypes";
import { rollDicesEffect } from "../../models/DicesStore";
import { setCurrentActionEvent } from "../../models/BoardActionStore";

export const rollDicesModal = (act: ShowModal): ShowModal => ({
  type: BoardActionType.SHOW_MODAL,
  userId: act.userId,
  title: act.title,
  text: act.text,
  actionButtons: [
    {
      title: "Бросить кубики",
      onClick: () => {
        rollDicesEffect({});
        setCurrentActionEvent(null);
      }
    }
  ],
  _id: act._id
});
