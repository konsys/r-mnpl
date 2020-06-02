import { IDices } from "../types/BoardTypes";
import { setDicesEvent } from "../stores/DicesStore";

export const rollDicesAction = async (act: IDices) => {
  const roll: IDices = {
    type: act.type,
    userId: act.userId,
    dices: act.dices,
    tokenPosition: act.tokenPosition,
    dicesSum:
      act && act.dices?.length && act.dices[0] + act.dices[1] + act.dices[2],
    _id: act._id,
  };
  setDicesEvent(roll);
};
