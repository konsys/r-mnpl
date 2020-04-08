import { GameDomain } from "./BoardStore";
import { BoardActionType } from "../core/models/types/BoardTypes";

interface ICurrentAction {
  action: BoardActionType;
  userId: number;
}

const BoardActionDomain = GameDomain.domain("BoardActionDomain");
export const resetBoardActionEvent = BoardActionDomain.event();

export const setCurrentActionEvent = BoardActionDomain.event<ICurrentAction | null>();

export const boardActionsStore = BoardActionDomain.store<ICurrentAction | null>(
  null
)
  .on(setCurrentActionEvent, (_, data) => data)
  .reset(resetBoardActionEvent);
