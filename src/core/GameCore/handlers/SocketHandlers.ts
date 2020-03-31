import { IModalStore, setBoardModalEvent } from "../../models/BoardModalStore";
import {
  BoardMessage,
  BoardEventType,
  RollDices,
  CanBuy
} from "../../models/types/BoardTypes";

export const rollDicesHandler = async (dices: RollDices) => {
  console.log(2342543534, rollDicesHandler);
  // await rollDices();
};

export const canBuyHandler = (b: CanBuy) => {
  const modal: IModalStore = {
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
