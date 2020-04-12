import { BoardActionType, BoardAction } from "../types/BoardTypes";
import { dicesModalEffect } from "../stores/ModalStore";

export const rollDicesModal = (act: BoardAction): BoardAction => {
  return {
    type: BoardActionType.SHOW_DICES_MODAL,
    userId: act.userId,
    title: act.title,
    text: act.text,
    actionButtons: [
      {
        title: "Бросить кубики",
        onClick: () => {
          dicesModalEffect({
            actionId: act._id,
          });
        },
      },
    ],
    _id: act._id,
  };
};

// const canBuyModalContent = (act: BoardAction): BoardAction => ({
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
