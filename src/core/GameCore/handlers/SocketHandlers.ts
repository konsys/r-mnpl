import { BoardMessage, BoardActionType } from "../../models/types/BoardTypes";
import { showModalHandler } from "./ModalHandler";
import { rollDicesHandler } from "./DicesHandler";
import { canBuyHandler } from "./BuyHandler";

export const boardMessageHandler = (message: BoardMessage) => {
  const events = message.data.events.type;
  events.map(v => {
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
