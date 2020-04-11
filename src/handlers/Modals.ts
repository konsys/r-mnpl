import { rollDicesEffect } from "../stores/DicesStore";
import { BoardActionType, ShowModal } from "../types/BoardTypes";
import { actionsStore } from "../stores/ActionStore";
import { showModalEvent } from "../stores/ModalStore";

actionsStore.watch((v) => {
  const action = v.event.action;
  switch (action.type) {
    case BoardActionType.SHOW_DICES_MODAL:
      showModalEvent({
        type: BoardActionType.SHOW_DICES_MODAL,
        _id: action._id,
        userId: action.userId,
        text: "111",
        title: "222",
      });
      break;
  }
});

const rollDicesModal = (act: ShowModal): ShowModal => ({
  type: BoardActionType.SHOW_DICES_MODAL,
  userId: act.userId,
  title: act.title,
  text: act.text,
  actionButtons: [
    {
      title: "Бросить кубики",
      onClick: () => {
        rollDicesEffect({});
      },
    },
  ],
  _id: act._id,
});

// const canBuyModalContent = (act: ShowModal): ShowModal => ({
//   type: BoardActionType.SHOW_DICES_MODAL,
//   userId: act.userId,
//   title: act.title,
//   text: act.text,
//   actionButtons: [
//     {
//       title: "Купить",
//       onClick: () => {
//         rollDicesEffect({});
//       },
//     },
//     {
//       title: "На аукцион",
//       onClick: () => {
//         rollDicesEffect({});
//       },
//     },
//   ],
//   _id: act._id,
// });
