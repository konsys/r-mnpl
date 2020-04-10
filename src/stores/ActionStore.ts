import { BoardDomain } from "./MainStore";
import { BoardActionType } from "../types/BoardTypes";

interface ICurrentAction {
  action: BoardActionType;
  userId: number;
}

const ActionDomain = BoardDomain.domain("BoardActionDomain");
export const resetActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction | null>();

export const actionsStore = ActionDomain.store<ICurrentAction | null>(null)
  .on(setCurrentActionEvent, (_, data) => data)
  .reset(resetActionEvent);
