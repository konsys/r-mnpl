import { BoardMessage, BoardActionType } from "../types/BoardTypes";
import { showModalHandler } from "./ModalHandler";
import { rollDicesHandler } from "./DicesHandler";
import { canBuyHandler } from "./BuyHandler";

export const boardMessageHandler = (message: BoardMessage) => {
  console.log(11111111111, message.data);
  const event = message.data.event.action;

  switch (event.type) {
    case BoardActionType.SHOW_MODAL:
      return showModalHandler(event, BoardActionType.SHOW_MODAL);

    case BoardActionType.ROLL_DICES:
      return rollDicesHandler(event);

    case BoardActionType.CAN_BUY:
      return canBuyHandler(event);
  }
};
