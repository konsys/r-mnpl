import { BoardAction, OutcomeMessageType } from "../types/types";
import {
  auctionAccept,
  auctionDecline,
  fieldAuctionEffect,
  fieldBoughtEffect,
  taxPaidEffect,
  unjailPaidEffect,
} from "../stores/ModalStore";

import { getFieldById } from "../utils/fields.utils";
import { getPlayerById } from "../utils/players.utils";
import { rollDicesEffect } from "../models/Board/model";

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
            action: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
          });
        },
        disabled: false,
      },
    ],
    _id: act._id,
    isModal: act.isModal,
  };
};

export const canBuyModal = (act: BoardAction): BoardAction => {
  const p = getPlayerById(act.userId);
  const f = act.field && act.field.fieldId && getFieldById(act.field.fieldId);

  if (!p || !f) {
    throw new Error("User or Field not found inbuy modal");
  }

  return {
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
        disabled: !f.price || p.money < f.price?.startPrice,
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
  };
};

export const taxModal = (act: BoardAction): BoardAction => {
  const p = getPlayerById(act.userId);
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
        disabled: !p || !act.money || p?.money < Math.abs(act.money),
      },
    ],
    _id: act._id,
    isModal: act.isModal,
  };
};

export const unJailModal = (act: BoardAction): BoardAction => {
  const p = getPlayerById(act.userId);
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
        disabled: !p || !act.money || p?.money < Math.abs(act.money),
      },
      {
        title: "Бросить кубики",
        onClick: () => {
          rollDicesEffect({
            action: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
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
  const p = getPlayerById(act.userId);
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
        disabled: !p || !act.money || p?.money < Math.abs(act.money),
      },
    ],
    _id: act._id,
    isModal: act.isModal,
  };
};

export const auctionModal = (act: BoardAction): BoardAction => {
  const p = getPlayerById(act.userId);
  return {
    type: act.type,
    userId: act.userId,
    title: act.title,
    text: act.text,
    actionButtons: [
      {
        title: `Поднять до ${act.bet}k`,
        onClick: () => {
          auctionAccept({
            actionId: act._id,
          });
        },
        disabled: !p || !act.bet || p?.money < Math.abs(act.bet),
      },
      {
        title: `Отказаться`,
        onClick: () => {
          auctionDecline({
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
