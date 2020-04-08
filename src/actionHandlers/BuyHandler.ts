import nanoid from "nanoid";
import { setBoardModalEvent } from "../stores/BoardModalStore";
import { setCurrentActionEvent } from "../stores/BoardActionStore";
import {
  ShowModal,
  BoardActionType,
  CanBuy,
} from "../core/models/types/BoardTypes";

export const canBuyHandler = (act: CanBuy) => {
  setCurrentActionEvent({
    action: BoardActionType.ROLL_DICES,
    userId: act.userId,
  });
  const modal: ShowModal = {
    type: BoardActionType.SHOW_MODAL,
    userId: act.userId,
    title: "Покупаем?",
    text:
      "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион.",
    actionButtons: [
      {
        title: "Купить",
        onClick: () => console.log("BUY"),
      },
      {
        title: "На аукцион",
        onClick: () => console.log("TO AUCTION"),
      },
    ],
    _id: nanoid(4),
  };
  setBoardModalEvent(modal);
  return setCurrentActionEvent(null);
};