import { setDicesEvent } from "../models/DicesStore";
import { BoardMessage, BoardEventType, RollDices } from "../models/BoardModel";

export const rollDicesHandler = (dices: RollDices) => setDicesEvent(dices);

export const boardMessageHandler = (message: BoardMessage) => {
  const events = message.data.events.type;
  events.map(v => {
    switch (v.type) {
      case BoardEventType.ROLL_DICES:
        rollDicesHandler(v);
        break;
    }

    return v;
  });
};
