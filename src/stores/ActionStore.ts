import { BoardDomain } from "./BoardDomain";
import { BoardActionType, IBoardEvent } from "../types/BoardTypes";
import { showModalEvent } from "./ModalStore";
import {
  rollDicesModal,
  canBuyModal,
  taxModal,
  unJailModal,
} from "../handlers/Modals";
import { rollDicesHandler } from "../handlers/DicesHandler";
import { resetDicesEvent } from "./DicesStore";

export interface ICurrentAction {
  actionId: string;
  event: IBoardEvent;
  isCompleted: boolean;
}
// Current
const ActionDomain = BoardDomain.domain("BoardActionDomain");
export const resetActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction>();

export const actionsStore = ActionDomain.store<ICurrentAction>({
  actionId: "",
  isCompleted: true,
  event: {
    action: {
      type: BoardActionType.VOID,
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
    case BoardActionType.ROLL_DICES_MODAL:
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

    case BoardActionType.PLAYER_TOKEN_MOVED:
      rollDicesHandler(action);
      break;

    case BoardActionType.CAN_BUY:
      showModalEvent(canBuyModal(action));
      break;

    case BoardActionType.TAX_PAYING_MODAL:
      showModalEvent(taxModal(action));
      break;

    case BoardActionType.UN_JAIL_MODAL:
      showModalEvent(unJailModal(action));
      break;
  }
});

export const completeAction = (actionId: string) => {
  const action = actionsStore.getState();
  action.actionId === actionId &&
    setCurrentActionEvent({ ...action, isCompleted: true });
};
