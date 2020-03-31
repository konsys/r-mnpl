import { IModalStore, setBoardModalEvent } from "../../models/BoardModalStore";
import {
  BoardMessage,
  BoardEventType,
  CanBuy,
  RollDices
} from "../../models/types/BoardTypes";
import { setDicesEvent } from "../../models/DicesStore";

export const rollDicesHandler = async (d: RollDices) => {
  console.log(2342543534, rollDicesHandler);
  const modal: RollDices = {
    type: BoardEventType.ROLL_DICES,
    isVisible: true,
    userId: d.userId,
    dices: d.dices,
    meanPosition: d.meanPosition,
    dicesSum: d.dices[0] + d.dices[1] + d.dices[2],
    _id: d._id
  };
  setDicesEvent(modal);
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
