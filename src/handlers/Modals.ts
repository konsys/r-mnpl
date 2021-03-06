import { BoardAction, OutcomeMessageType } from "../types/types";

import { getField } from "../utils/fields.utils";
import { getPlayer } from "../utils/players.utils";
import { sendBoardAction } from "stores/Board/ActionStore";
import { ErrorCode } from "utils/errors";

export const rollDicesModal = (act: BoardAction): BoardAction => {
  return {
    ...act,
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
          });
        },
        disabled: false,
      },
    ],
  };
};

export const canBuyModal = (act: BoardAction): BoardAction => {
  const p = getPlayer(act.userId);
  const f = act.field && act.field.fieldId && getField(act.field.fieldId);

  if (!p) {
    throw new Error(ErrorCode[1001]);
  }
  if (!f) {
    throw new Error(ErrorCode[1002]);
  }

  return {
    ...act,
    actionButtons: [
      {
        title: "Купить",
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_BUY_FIELD_CLICKED,
          });
        },
        disabled: !f.price || p.money < f.price?.startPrice,
      },
      {
        title: "На аукцион",
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_AUCTION_START_CLICKED,
          });
        },
        disabled: false,
      },
    ],
  };
};

export const taxModal = (act: BoardAction): BoardAction => {
  const p = getPlayer(act.userId);
  return {
    ...act,
    actionButtons: [
      {
        title: `Заплатить ${act.money ? Math.abs(act.money) : 0}k`,
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_TAX_PAID_CLICKED,
          });
        },
        disabled: !p || !act.money || p?.money < Math.abs(act.money),
      },
    ],
  };
};

export const unJailModal = (act: BoardAction): BoardAction => {
  const p = getPlayer(act.userId);

  return {
    ...act,
    actionButtons: [
      {
        title: `Выйти под залог 500k`,
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_UN_JAIL_PAID_CLICKED,
          });
        },
        disabled: !p || !act.money || p?.money < Math.abs(act.money),
      },
      {
        title: "Бросить кубики",
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
          });
        },
        disabled: false,
      },
    ],
  };
};

export const unJailPayingModal = (act: BoardAction): BoardAction => {
  const p = getPlayer(act.userId);
  return {
    ...act,
    actionButtons: [
      {
        title: `Заплатить ${act.money ? Math.abs(act.money) : 0}k`,
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_UN_JAIL_PAID_CLICKED,
          });
        },
        disabled: !p || !act.money || p?.money < Math.abs(act.money),
      },
    ],
  };
};

export const auctionModal = (act: BoardAction): BoardAction => {
  const p = getPlayer(act.userId);
  return {
    type: act.type,
    userId: act.userId,
    title: act.title,
    actionButtons: [
      {
        title: `Поднять до ${act.bet}k`,
        onClick: () => {
          sendBoardAction({
            action: OutcomeMessageType.OUTCOME_AUCTION_ACCEPT_CLICKED,
          });
        },
        disabled: !p || !act.bet || p?.money < Math.abs(act.bet),
      },
      {
        title: `Отказаться`,
        onClick: () => {
          sendBoardAction({
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
