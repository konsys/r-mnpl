import {
  IBoardEvent,
  IGameActionRequest,
  IncomeMessageType,
} from "../../types/types";
import {
  auctionModal,
  canBuyModal,
  rollDicesModal,
  taxModal,
  unJailModal,
  unJailPayingModal,
} from "../../handlers/Modals";

import { BoardDomain } from "./BoardDomain";
import { fetchGameAction } from "api/Board/api";
import { hideDicesEvent } from "./DicesStore";
import { incomeContract } from "./ContractStore";
import nanoid from "nanoid";
import { rollDicesAction } from "../../handlers/DicesHandler";
import { showBoardModalEvent } from "./ModalStore";

export interface ICurrentAction {
  actionId: string;
  event: IBoardEvent;
}

const GameActionDomain = BoardDomain.domain("ModalDomain");

export const gameActionFx = GameActionDomain.effect<
  IGameActionRequest,
  Promise<any>,
  Error
>({
  handler: fetchGameAction,
});

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
  if (action) {
    switch (action.type) {
      case IncomeMessageType.INCOME_ROLL_DICES_MODAL:
        showBoardModalEvent(
          rollDicesModal({
            type: action.type,
            _id: action._id,
            userId: action.userId,
            text: action.text,
            title: action.title,
            isModal: action.isModal,
          })
        );
        break;

      case IncomeMessageType.INCOME_ROLL_DICES_ACTION:
        rollDicesAction(action);
        break;

      case IncomeMessageType.INCOME_CAN_BUY_MODAL:
        showBoardModalEvent(canBuyModal(action));
        break;

      case IncomeMessageType.INCOME_TAX_PAYING_MODAL:
        showBoardModalEvent(taxModal(action));
        break;

      case IncomeMessageType.INCOME_UN_JAIL_MODAL:
        showBoardModalEvent(unJailModal(action));
        break;

      case IncomeMessageType.INCOME_UNJAIL_PAYING_MODAL:
        showBoardModalEvent(unJailPayingModal(action));
        break;

      case IncomeMessageType.INCOME_AUCTION_MODAL:
        showBoardModalEvent(auctionModal(action));
        break;

      case IncomeMessageType.INCOME_CONTRACT_MODAL:
        // action && action.contract && setContract(action.contract);
        incomeContract();
        break;
    }
  }
});
