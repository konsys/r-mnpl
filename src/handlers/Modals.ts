import { BoardAction } from "../types/BoardTypes";
import { dicesModalEffect, canBuyModalEffect } from "../stores/ModalStore";

export const rollDicesModal = (act: BoardAction): BoardAction => {
  return {
    type: act.type,
    userId: act.userId,
    title: act.title,
    text: act.text,
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => {
          dicesModalEffect({
            actionId: act._id,
          });
        },
      },
    ],
    _id: act._id,
  };
};

export const canBuyModal = (act: BoardAction): BoardAction => ({
  type: act.type,
  userId: act.userId,
  title: act.title,
  text: act.text,
  actionButtons: [
    {
      title: "Купить",
      onClick: () => {
        canBuyModalEffect({
          actionId: act._id,
        });
      },
    },
    {
      title: "На аукцион",
      onClick: () => {
        // rollDicesEffect({});
      },
    },
  ],
  _id: act._id,
});
