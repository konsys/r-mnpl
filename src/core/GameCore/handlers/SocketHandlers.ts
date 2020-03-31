import { setDicesEvent } from "../models/DicesStore";
import {
  BoardMessage,
  BoardEventType,
  RollDices,
  CanBuy
} from "../models/BoardModel";

export const rollDicesHandler = (dices: RollDices) => setDicesEvent(dices);

export const canBuyHandler = (buy: CanBuy) => console.log("TODO CanBuy", buy);

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
