import { BoardActionType, BoardAction } from "../types/BoardTypes";
import { setDicesEvent } from "../stores/DicesStore";

export const rollDicesHandler = async (act: BoardAction) => {
  const roll: BoardAction = {
    type: BoardActionType.PLAYER_TOKEN_MOVED,
    userId: act.userId,
    dices: act.dices,
    meanPosition: act.meanPosition,
    dicesSum:
      act && act.dices?.length && act.dices[0] + act.dices[1] + act.dices[2],
    _id: act._id,
  };
  setDicesEvent(roll);
};
