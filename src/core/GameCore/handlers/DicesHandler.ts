import { RollDices, BoardActionType } from "../../models/types/BoardTypes";
import { setCurrentActionEvent } from "../../../stores/BoardActionStore";
import { setDicesEvent } from "../../../stores/DicesStore";

export const rollDicesHandler = async (act: RollDices) => {
  setCurrentActionEvent({
    action: BoardActionType.ROLL_DICES,
    userId: act.userId,
  });

  const modal: RollDices = {
    type: BoardActionType.ROLL_DICES,
    userId: act.userId,
    dices: act.dices,
    meanPosition: act.meanPosition,
    dicesSum: act.dices[0] + act.dices[1] + act.dices[2],
    _id: act._id,
  };
  setDicesEvent(modal);
  return setCurrentActionEvent(null);
};
