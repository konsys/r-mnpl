import { BoardDomain } from "./MainStore";
import { BoardActionType } from "../types/BoardTypes";

export interface ICurrentAction {
  action: BoardActionType;
  userId: number;
}
// Current
const ActionDomain = BoardDomain.domain("BoardActionDomain");
export const resetActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction | null>();

export const actionsStore = ActionDomain.store<ICurrentAction | null>(null)
  .on(setCurrentActionEvent, (_, data) => data)
  .reset(resetActionEvent);

// Planned
const PlannedActionsDomain = BoardDomain.domain("PlannedActionsDomain");
export const resetPlannedActionsEvent = PlannedActionsDomain.event();

export const setPlannedActionsEvent = PlannedActionsDomain.event<
  ICurrentAction[]
>();

export const plannedActionsStore = PlannedActionsDomain.store<ICurrentAction[]>(
  []
)
  .on(setPlannedActionsEvent, (_, data) => data)
  .reset(resetPlannedActionsEvent);
