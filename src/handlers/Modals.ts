import { setCurrentActionEvent } from "../stores/ActionStore";
import { rollDicesEffect } from "../stores/DicesStore";
import { BoardActionType, ShowModal } from "../types/BoardTypes";

const rollDicesModalContent = (act: ShowModal): ShowModal => ({
  type: BoardActionType.SHOW_MODAL,
  userId: act.userId,
  title: act.title,
  text: act.text,
  actionButtons: [
    {
      title: "Бросить кубики",
      onClick: () => {
        setCurrentActionEvent(null);
        rollDicesEffect({});
      },
    },
  ],
  _id: act._id,
});

const canBuyModalContent = (act: ShowModal): ShowModal => ({
  type: BoardActionType.SHOW_MODAL,
  userId: act.userId,
  title: act.title,
  text: act.text,
  actionButtons: [
    {
      title: "Купить",
      onClick: () => {
        setCurrentActionEvent(null);
        rollDicesEffect({});
      },
    },
    {
      title: "На аукцион",
      onClick: () => {
        setCurrentActionEvent(null);
        rollDicesEffect({});
      },
    },
  ],
  _id: act._id,
});

export const modalTypes = (type: BoardActionType, content: ShowModal) => {
  switch (type) {
    case BoardActionType.ROLL_DICES:
      return rollDicesModalContent(content);

    case BoardActionType.CAN_BUY:
      return canBuyModalContent(content);

    default:
      return rollDicesModalContent(content);
  }
};
