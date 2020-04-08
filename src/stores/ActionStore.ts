import { GameDomain } from "./GameStore";
import { BoardActionType } from "../types/BoardTypes";

interface ICurrentAction {
  action: BoardActionType;
  userId: number;
}

const ActionDomain = GameDomain.domain("BoardActionDomain");
export const resetBoardActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction | null>();

export const boardActionsStore = ActionDomain.store<ICurrentAction | null>(null)
  .on(setCurrentActionEvent, (_, data) => data)
  .reset(resetBoardActionEvent);
