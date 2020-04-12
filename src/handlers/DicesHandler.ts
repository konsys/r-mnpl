import { BoardActionType, BoardAction } from "../types/BoardTypes";
import { setDicesEvent } from "../stores/DicesStore";
import { actionsStore } from "../stores/ActionStore";

export const rollDicesHandler = async (act: BoardAction) => {
  const action = actionsStore.getState();
  console.log("action", action);
  const modal: BoardAction = {
    type: BoardActionType.ROLL_DICES,
    userId: act.userId,
    dices: act.dices,
    meanPosition: act.meanPosition,
    dicesSum:
      act && act.dices?.length && act.dices[0] + act.dices[1] + act.dices[2],
    _id: act._id,
  };
  setDicesEvent(modal);
};
