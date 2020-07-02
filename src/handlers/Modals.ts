import { BoardAction } from "../types/types";
import {
  rollDicesEffect,
  fieldBoughtEffect,
  fieldAuctionEffect,
  taxPaidEffect,
  unjailPaidEffect,
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
          rollDicesEffect({
            actionId: act._id,
          });
        },
        disabled: false,
      },
    ],
    _id: act._id,
    isModal: act.isModal,
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
  isModal: act.isModal,
});

export const taxModal = (act: BoardAction): BoardAction => {
  return {
    type: act.type,
    userId: act.userId,
    title: act.title,
    text: act.text,
    actionButtons: [
      {
        title: `Заплатить ${act.money && Math.abs(act.money)}k`,
        onClick: () => {
          taxPaidEffect({
            actionId: act._id,
          });
        },
        disabled: false,
      },
    ],
    _id: act._id,
    isModal: act.isModal,
  };
};

export const unJailModal = (act: BoardAction): BoardAction => {
  return {
    type: act.type,
    userId: act.userId,
    title: act.title,
    text: act.text,
    actionButtons: [
      {
        title: "Выйти под залог 500k",
        onClick: () => {
          unjailPaidEffect({
            actionId: act._id,
          });
        },
        disabled: false,
      },
      {
        title: "Бросить кубики",
        onClick: () => {
          rollDicesEffect({
            actionId: act._id,
          });
        },
        disabled: false,
      },
    ],
    _id: act._id,
    isModal: act.isModal,
  };
};

export const unJailPayingModal = (act: BoardAction): BoardAction => {
  return {
    type: act.type,
    userId: act.userId,
    title: act.title,
    text: act.text,
    actionButtons: [
      {
        title: `Заплатить ${act.money && Math.abs(act.money)}k`,
        onClick: () => {
          unjailPaidEffect({
            actionId: act._id,
          });
        },
        disabled: false,
      },
    ],
    _id: act._id,
    isModal: act.isModal,
  };
};
