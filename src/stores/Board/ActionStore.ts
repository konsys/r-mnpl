import {
  BoardAction,
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
import { contract$, incomeContract, setContract } from "./ContractStore";
import { postBoardAction } from "api/Board/api";
import { rollDicesAction } from "handlers/DicesHandler";
import { combine, guard, sample } from "effector";
import { showBoardActionModal } from "./ModalStore";
import { get } from "lodash";
import { user$ } from "stores/Game/User/UserModel";

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

const sendBoardSample = sample({
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
  source: sendBoardSample,
  filter: boardGame$.map((v) => !!v?.roomId),
  target: gameActionFx,
});

export const resetActionEvent = ActionDomain.event();

export const setBoardAction = ActionDomain.event<ICurrentAction>();

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
  .on(setBoardAction, (_, data) => data)
  .reset(resetActionEvent);

export const doNothingAction = (userId: number) => {
  setBoardAction({
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

sample({
  source: actions$,
  clock: actions$.updates,
  fn: (action) => {
    const currentAction =
      (get(action, "event.action") as BoardAction) || undefined;
    if (currentAction && currentAction.type) {
      actionHandler(currentAction);
    }
  },
});

const actionHandler = (action: BoardAction) => {
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
};

sample({
  clock: incomeContract,
  source: combine({
    action: actions$ && actions$.map((v) => v),
    user: user$ && user$.map((v) => v),
    contract: contract$ && contract$.map((v) => v),
  }),
  fn: ({ action, user, contract }) => {
    const toUserId = get(action, "event.action.contract.toUserId");
    const payloadContract = get(action, "event.action.contract");

    if (toUserId && user && user.userId === toUserId) {
      return payloadContract;
    }
    return contract;
  },
  target: setContract,
});
