import { setBoardModalEvent } from "../../models/BoardModalStore";
import {
  BoardMessage,
  BoardActionType,
  CanBuy,
  RollDices,
  ShowModal
} from "../../models/types/BoardTypes";
import { setDicesEvent, rollDicesEffect } from "../../models/DicesStore";
import { setCurrentActionEvent } from "../../models/BoardActionStore";
import nanoid from "nanoid";

export const showModalHandler = async (act: ShowModal) => {
  setCurrentActionEvent({
    action: BoardActionType.ROLL_DICES,
    userId: act.userId
  });
  const modal: ShowModal = {
    type: BoardActionType.SHOW_MODAL,
    userId: 1,
    title: "Бросить кубики",
    text: "Мы болеем за вас",
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => {
          rollDicesEffect({});
        }
      }
    ],
    _id: nanoid(4)
  };
  setBoardModalEvent(modal);
};

export const rollDicesHandler = async (act: RollDices) => {
  setCurrentActionEvent({
    action: BoardActionType.ROLL_DICES,
    userId: act.userId
  });

  const modal: RollDices = {
    type: BoardActionType.ROLL_DICES,
    userId: act.userId,
    dices: act.dices,
    meanPosition: act.meanPosition,
    dicesSum: act.dices[0] + act.dices[1] + act.dices[2],
    _id: act._id
  };
  setDicesEvent(modal);
  return setCurrentActionEvent(null);
};

export const canBuyHandler = (act: CanBuy) => {
  setCurrentActionEvent({
    action: BoardActionType.ROLL_DICES,
    userId: act.userId
  });
  const modal: ShowModal = {
    type: BoardActionType.SHOW_MODAL,
    userId: act.userId,
    title: "Покупаем?",
    text:
      "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион.",
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => rollDicesHandler
      }
    ],
    _id: nanoid(4)
  };
  setBoardModalEvent(modal);
  return setCurrentActionEvent(null);
};

export const boardMessageHandler = (message: BoardMessage) => {
  const events = message.data.events.type;
  events.map(v => {
    switch (v.type) {
      case BoardActionType.ROLL_DICES:
        rollDicesHandler(v);
        break;

      case BoardActionType.CAN_BUY:
        canBuyHandler(v);
        break;
    }

    return v;
  });
};
