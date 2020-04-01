import { GameDomain } from "./BoardStore";
import { IUser } from "../../components/Players/Players";

interface ICurrentAction {}

const boardActionDomain = GameDomain.domain("boardActionDomain");
export const resetBoardActionEvent = boardActionDomain.event();

export const setBoardActionEvent = boardActionDomain.event<IUser>();

export const boardActionsStore = boardActionDomain
  .store(null)
  .on(setBoardActionEvent, (_, data) => {
    console.log("setBoardActionEvent", data);
  })
  .reset(resetBoardActionEvent);
