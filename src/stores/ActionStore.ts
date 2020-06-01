import { BoardDomain } from "./BoardDomain";
import { IBoardEvent, IncomeMessageType } from "../types/BoardTypes";
import { showModalEvent } from "./ModalStore";
import {
  rollDicesModal,
  canBuyModal,
  taxModal,
  unJailModal,
} from "../handlers/Modals";
import { rollDicesAction } from "../handlers/DicesHandler";
import { resetDicesEvent } from "./DicesStore";

export interface ICurrentAction {
  actionId: string;
  event: IBoardEvent;
}
// Current
const ActionDomain = BoardDomain.domain("BoardActionDomain");
export const resetActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction>();

export const actionsStore = ActionDomain.store<ICurrentAction>({
  actionId: "",
  event: {
    action: {
      type: IncomeMessageType.DO_NOTHING,
      userId: 0,
      _id: "",
    },
  },
})
  .on(setCurrentActionEvent, (_, data) => data)
  .reset(resetActionEvent);

actionsStore.watch((v) => {
  const action = v.event.action;
  switch (action.type) {
    case IncomeMessageType.INCOME_ROLL_DICES_MODAL:
      resetDicesEvent();
      showModalEvent(
        rollDicesModal({
          type: action.type,
          _id: action._id,
          userId: action.userId,
          text: action.text,
          title: action.title,
        })
      );
      break;

    case IncomeMessageType.INCOME_ROLL_DICES_ACTION:
      rollDicesAction(action);
      break;

    case IncomeMessageType.INCOME_CAN_BUY_MODAL:
      showModalEvent(canBuyModal(action));
      break;

    case IncomeMessageType.INCOME_TAX_PAYING_MODAL:
      showModalEvent(taxModal(action));
      break;

    case IncomeMessageType.INCOME_UN_JAIL_MODAL:
      showModalEvent(unJailModal(action));
      break;
  }
});
