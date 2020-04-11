import { BoardDomain } from "./MainStore";
import { BoardActionType, IBoardEvent } from "../types/BoardTypes";
import { showModalEvent } from "./ModalStore";
import { rollDicesModal } from "../handlers/Modals";

export interface ICurrentAction {
  actionId: string;
  isCompleted: boolean;
  event: IBoardEvent;
}
// Current
const ActionDomain = BoardDomain.domain("BoardActionDomain");
export const resetActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction>();

export const actionsStore = ActionDomain.store<ICurrentAction>({
  actionId: "",
  isCompleted: false,
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
  console.log(234242342, action);
  switch (action.type) {
    case BoardActionType.SHOW_DICES_MODAL:
      showModalEvent(
        rollDicesModal({
          type: BoardActionType.SHOW_DICES_MODAL,
          _id: action._id,
          userId: action.userId,
          text: action.text,
          title: action.title,
        })
      );
      break;
  }
});
