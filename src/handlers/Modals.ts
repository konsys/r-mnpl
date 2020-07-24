import { BoardAction, OutcomeMessageType } from "../types/types";

import { gameActionEffect } from "../models/Board/model";
import { getFieldById } from "../utils/fields.utils";
import { getPlayerById } from "../utils/players.utils";

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
          gameActionEffect({
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
          gameActionEffect({
            action: OutcomeMessageType.OUTCOME_BUY_FIELD_CLICKED,
          });
        },
        disabled: !f.price || p.money < f.price?.startPrice,
      },
      {
        title: "На аукцион",
        onClick: () => {
          gameActionEffect({
            action: OutcomeMessageType.OUTCOME_AUCTION_START_CLICKED,
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
          gameActionEffect({
            action: OutcomeMessageType.OUTCOME_TAX_PAID_CLICKED,
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
          gameActionEffect({
            action: OutcomeMessageType.OUTCOME_UN_JAIL_PAID_CLICKED,
          });
        },
        disabled: !p || !act.money || p?.money < Math.abs(act.money),
      },
      {
        title: "Бросить кубики",
        onClick: () => {
          gameActionEffect({
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
          gameActionEffect({
            action: OutcomeMessageType.OUTCOME_UN_JAIL_PAID_CLICKED,
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
          gameActionEffect({
            action: OutcomeMessageType.OUTCOME_AUCTION_ACCEPT_CLICKED,
          });
        },
        disabled: !p || !act.bet || p?.money < Math.abs(act.bet),
      },
      {
        title: `Отказаться`,
        onClick: () => {
          gameActionEffect({
            action: OutcomeMessageType.OUTCOME_AUCTION_DECLINE_CLICKED,
          });
        },
        disabled: false,
      },
    ],
    _id: act._id,
    isModal: act.isModal,
  };
};
