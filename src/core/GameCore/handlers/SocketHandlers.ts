import { setDicesEvent } from "../models/DicesStore";
import { IModalMStore, setBoardModalEvent } from "../models/BoardModalStore";
import {
  BoardMessage,
  BoardEventType,
  RollDices,
  CanBuy
} from "../models/BoardModel";

export const rollDicesHandler = (dices: RollDices) => setDicesEvent(dices);

export const canBuyHandler = (b: CanBuy) => {
  const modal: IModalMStore = {
    userId: b.userId,
    title: "Покупаем?",
    text:
      "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион.",
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => console.log("click")
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
