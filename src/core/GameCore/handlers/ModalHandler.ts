import { ShowModal, BoardActionType } from "../../models/types/BoardTypes";
import { setCurrentActionEvent } from "../../models/BoardActionStore";
import { rollDicesEffect } from "../../models/DicesStore";
import { setBoardModalEvent } from "../../models/BoardModalStore";

export const showModalHandler = async (act: ShowModal) => {
  console.log("showModalHandler", act);

  setCurrentActionEvent({
    action: BoardActionType.SHOW_MODAL,
    userId: act.userId
  });
  const modal: ShowModal = {
    type: BoardActionType.SHOW_MODAL,
    userId: act.userId,
    title: act.title,
    text: act.text,
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => {
          rollDicesEffect({});
        }
      }
    ],
    _id: act._id
  };
  setBoardModalEvent(modal);
};
