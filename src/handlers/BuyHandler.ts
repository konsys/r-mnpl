import nanoid from "nanoid";
import { showModalEvent } from "../stores/ModalStore";
import { ShowModal, BoardActionType, BoardAction } from "../types/BoardTypes";

export const canBuyHandler = (act: BoardAction) => {
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
  showModalEvent(modal);
};
