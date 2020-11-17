import {
  IBoardAction,
  IBoardActionRequest,
  IBoardEvent,
  IncomeMessageType,
} from "types/types";
import {
  auctionModal,
  canBuyModal,
  rollDicesModal,
  taxModal,
  unJailModal,
  unJailPayingModal,
} from "handlers/Modals";

import { BoardDomain } from "./BoardDomain";
import { boardGame$ } from "stores/Game/Board/BoardModel";
import { incomeContract } from "./ContractStore";
import nanoid from "nanoid";
import { postBoardAction } from "api/Board/api";
import { rollDicesAction } from "handlers/DicesHandler";
import { guard, sample } from "effector";
import { showBoardActionModal } from "./ModalStore";

const ActionDomain = BoardDomain.domain("BoardActionDomain");
export interface ICurrentAction {
  actionId: string;
  event: IBoardEvent;
}

const GameActionDomain = BoardDomain.domain("ModalDomain");

export const sendBoardAction = GameActionDomain.event<IBoardAction>();

export const gameActionFx = GameActionDomain.effect<
  IBoardActionRequest,
  Promise<any>,
  Error
>({
  handler: postBoardAction,
});

const sendBoardGuard = sample({
  source: boardGame$,
  clock: sendBoardAction,
  fn: (action, board) => {
    return {
      ...board,
      gameId: action?.roomId,
    } as IBoardActionRequest;
  },
});

guard({
  source: sendBoardGuard,
  filter: boardGame$.map((v) => !!v?.roomId),
  target: gameActionFx,
});

export const resetActionEvent = ActionDomain.event();

export const setCurrentAction = ActionDomain.event<ICurrentAction>();

export const actions$ = ActionDomain.store<ICurrentAction>({
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
  .on(setCurrentAction, (_, data) => data)
  .reset(resetActionEvent);

export const doNothingAction = (userId: number) => {
  setCurrentAction({
    actionId: "startActionId",
    event: {
      action: {
        _id: "actionEventId",
        userId,
        type: IncomeMessageType.DO_NOTHING,
        isModal: false,
      },
    },
  });
};

actions$.watch((v) => {
  const action = v.event.action;

  if (action) {
    switch (action.type) {
      case IncomeMessageType.INCOME_ROLL_DICES_MODAL:
        showBoardActionModal(rollDicesModal(action));
        break;

      case IncomeMessageType.INCOME_ROLL_DICES_ACTION:
        rollDicesAction(action);
        break;

      case IncomeMessageType.INCOME_CAN_BUY_MODAL:
        showBoardActionModal(canBuyModal(action));
        break;

      case IncomeMessageType.INCOME_TAX_PAYING_MODAL:
        showBoardActionModal(taxModal(action));
        break;

      case IncomeMessageType.INCOME_UN_JAIL_MODAL:
        showBoardActionModal(unJailModal(action));
        break;

      case IncomeMessageType.INCOME_UNJAIL_PAYING_MODAL:
        showBoardActionModal(unJailPayingModal(action));
        break;

      case IncomeMessageType.INCOME_AUCTION_MODAL:
        showBoardActionModal(auctionModal(action));
        break;

      case IncomeMessageType.INCOME_CONTRACT_MODAL:
        incomeContract();
        break;
    }
  }
});
