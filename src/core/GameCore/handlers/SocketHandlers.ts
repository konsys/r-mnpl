import { setDicesEvent } from "../../models/DicesStore";
import { IModalMStore, setBoardModalEvent } from "../../models/BoardModalStore";
import { resetDicesEvent, rollDicesEffect } from "../../models/DicesStore";
import {
  showDicesEvent,
  hideActionModalEvent,
  hideDicesEvent,
  showActionModalEvent
} from "../../models/VisibilityStore";
import {
  BoardMessage,
  BoardEventType,
  RollDices,
  CanBuy
} from "../../models/BoardModel";

const rollDices = async () => {
  // resetDicesEvent();
  showDicesEvent();
  // hideActionModalEvent();
  // setTimeout(() => rollDicesEffect({}));
  // setTimeout(() => {
  //   hideDicesEvent();
  //   showActionModalEvent();
  // }, 2000);
};

const rollDicesHandler = async (dices: RollDices) => {
  console.log(2342543534);
  await rollDices();
};

const canBuyHandler = (b: CanBuy) => {
  const modal: IModalMStore = {
    isVisible: true,
    userId: b.userId,
    title: "Покупаем?",
    text:
      "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион.",
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => rollDicesHandler
      }
    ]
  };
  setBoardModalEvent(modal);
};

export const boardMessageHandler = (message: BoardMessage) => {
  const events = message.data.events.type;
  events.map(v => {
    switch (v.type) {
      case BoardEventType.ROLL_DICES:
        rollDicesHandler(v);
        break;

      case BoardEventType.CAN_BUY:
        canBuyHandler(v);
        break;
    }

    return v;
  });
};
