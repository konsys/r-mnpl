import { IBoardEvent, IncomeMessageType } from "../types/types";
import {
  auctionModal,
  canBuyModal,
  rollDicesModal,
  taxModal,
  unJailModal,
  unJailPayingModal,
} from "../handlers/Modals";

import { BoardDomain } from "./BoardDomain";
import { hideDicesEvent } from "./DicesStore";
import { incomeContract } from "./ContractStore";
import nanoid from "nanoid";
import { rollDicesAction } from "../handlers/DicesHandler";
import { showModalEvent } from "./ModalStore";

export interface ICurrentAction {
  actionId: string;
  event: IBoardEvent;
}
// Current
const ActionDomain = BoardDomain.domain("BoardActionDomain");
export const resetActionEvent = ActionDomain.event();

export const setCurrentActionEvent = ActionDomain.event<ICurrentAction>();

export const actionsStore = ActionDomain.store<ICurrentAction>({
  actionId: "",
  event: {
    action: {
      type: IncomeMessageType.DO_NOTHING,
      userId: 0,
      _id: "",
      isModal: false,
    },
  },
})
  .on(setCurrentActionEvent, (_, data) => data)
  .reset(resetActionEvent);

export const getCurrentAction = () => actionsStore.getState();

export const doNothing = (userId: number) => {
  setCurrentActionEvent({
    actionId: nanoid(4),
    event: {
      action: {
        _id: nanoid(),
        userId,
        type: IncomeMessageType.DO_NOTHING,
        isModal: false,
      },
    },
  });
};

actionsStore.watch((v) => {
  const action = v.event.action;
  hideDicesEvent();
  // switch (action.type) {
  //   case IncomeMessageType.INCOME_ROLL_DICES_MODAL:
  //     showModalEvent(
  //       rollDicesModal({
  //         type: action.type,
  //         _id: action._id,
  //         userId: action.userId,
  //         text: action.text,
  //         title: action.title,
  //         isModal: action.isModal,
  //       })
  //     );
  //     break;

  //   case IncomeMessageType.INCOME_ROLL_DICES_ACTION:
  //     rollDicesAction(action);
  //     break;

  //   case IncomeMessageType.INCOME_CAN_BUY_MODAL:
  //     showModalEvent(canBuyModal(action));
  //     break;

  //   case IncomeMessageType.INCOME_TAX_PAYING_MODAL:
  //     showModalEvent(taxModal(action));
  //     break;

  //   case IncomeMessageType.INCOME_UN_JAIL_MODAL:
  //     showModalEvent(unJailModal(action));
  //     break;

  //   case IncomeMessageType.INCOME_UNJAIL_PAYING_MODAL:
  //     showModalEvent(unJailPayingModal(action));
  //     break;

  //   case IncomeMessageType.INCOME_AUCTION_MODAL:
  //     showModalEvent(auctionModal(action));
  //     break;

  //   case IncomeMessageType.INCOME_CONTRACT_MODAL:
  //     // incomeContract();

  //     break;
  // }
});
