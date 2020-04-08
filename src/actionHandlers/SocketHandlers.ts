import { showModalHandler } from "./ModalHandler";
import { rollDicesHandler } from "./DicesHandler";
import { canBuyHandler } from "./BuyHandler";
import { BoardMessage, BoardActionType } from "../core/models/types/BoardTypes";

export const boardMessageHandler = (message: BoardMessage) => {
  const events = message.data.events.type;
  events.map((v) => {
    switch (v.type) {
      case BoardActionType.SHOW_MODAL:
        showModalHandler(v);
        break;

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
