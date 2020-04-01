import { GameDomain } from "./BoardStore";
import { BoardActionType } from "../models/types/BoardTypes";

interface ICurrentAction {
  action: BoardActionType | null;
  userId: number;
}

const boardActionDomain = GameDomain.domain("boardActionDomain");
export const resetBoardActionEvent = boardActionDomain.event();

export const setCurrentActionEvent = boardActionDomain.event<ICurrentAction | null>();

export const boardActionsStore = boardActionDomain
  .store<ICurrentAction>({ action: null, userId: 0 })
  .on(setCurrentActionEvent, (_, data) => {
    console.log("setBoardActionEvent", data);
  })
  .reset(resetBoardActionEvent);
