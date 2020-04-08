import { setCurrentActionEvent } from "../stores/ActionStore";
import { rollDicesEffect } from "../stores/DicesStore";
import { BoardActionType, ShowModal } from "../types/BoardTypes";

export const rollDicesModal = (act: ShowModal): ShowModal => ({
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

export const canBuyModal = (act: ShowModal): ShowModal => ({
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
