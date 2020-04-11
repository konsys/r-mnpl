import { rollDicesEffect } from "../stores/DicesStore";
import { BoardActionType, ShowDicesModal } from "../types/BoardTypes";

export const rollDicesModal = (act: ShowDicesModal): ShowDicesModal => ({
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

// const canBuyModalContent = (act: ShowDicesModal): ShowDicesModal => ({
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
