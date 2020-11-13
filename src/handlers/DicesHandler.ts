import { IDices } from "types/types";
import { setDicesEvent } from "stores/Board/DicesStore";

export const rollDicesAction = (act: IDices) => {
  const roll: IDices = {
   ...act,
    dicesSum:
      act && act.dices?.length ? act.dices[0] + act.dices[1] + act.dices[2] : 0,
  };
  setDicesEvent(roll);
};
