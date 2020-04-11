import { BoardDomain } from "./MainStore";
import { BoardActionType, IBoardEvent } from "../types/BoardTypes";

export interface ICurrentAction {
  action: BoardActionType;
  userId: number;
  actionId: string;
  event: IBoardEvent;
}
// Current
const ActionDomain = BoardDomain.domain("BoardActionDomain");
export const resetActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction | null>();

export const actionsStore = ActionDomain.store<ICurrentAction | null>(null)
  .on(setCurrentActionEvent, (_, data) => data)
  .reset(resetActionEvent);

actionsStore.watch((v) => console.log("actionsStore", v));
