import { BoardDomain } from "./MainStore";
import { BoardActionType, IBoardEvent } from "../types/BoardTypes";

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

actionsStore.watch((v) => console.log("actionsStore", v));
