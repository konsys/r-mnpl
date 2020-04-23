import { BoardAction } from "../types/BoardTypes";
import {
  dicesRolledEffect,
  fieldBoughtEffect,
  fieldAuctionEffect,
} from "../stores/ModalStore";

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
          dicesRolledEffect({
            actionId: act._id,
          });
        },
        disabled: false,
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
        fieldBoughtEffect({
          actionId: act._id,
        });
      },
      disabled: false,
    },
    {
      title: "На аукцион",
      onClick: () => {
        fieldAuctionEffect({
          actionId: act._id,
        });
      },
      disabled: false,
    },
  ],
  _id: act._id,
});
