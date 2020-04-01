import { GameDomain } from "./BoardStore";
import { BoardActionType } from "../models/types/BoardTypes";

interface ICurrentAction {
  action: BoardActionType | null;
  userId: number;
}

const BoardActionDomain = GameDomain.domain("BoardActionDomain");
export const resetBoardActionEvent = BoardActionDomain.event();

export const setCurrentActionEvent = BoardActionDomain.event<ICurrentAction | null>();

export const boardActionsStore = BoardActionDomain.store<ICurrentAction | null>(
  {
    action: null,
    userId: 0
  }
)
  .on(setCurrentActionEvent, (_, data) => (data ? data : null))
  .reset(resetBoardActionEvent);
