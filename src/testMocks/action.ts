import { ICurrentAction } from "stores/Board/ActionStore";
import {
  BoardAction,
  IncomeMessageType,
  OutcomeMessageType,
} from "types/types";

export const testDoNothingAction: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.DO_NOTHING,
    },
  },
};

export const testRollDicesModal: BoardAction = {
  _id: "testBoardAction",
  type: IncomeMessageType.INCOME_ROLL_DICES_MODAL,

  userId: 1,
  title: "testTitleRollDices",
  text: "testTextRollDices",
  isModal: true,
};

export const testRollDicesClicked: BoardAction = {
  _id: "testBoardAction",
  type: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
  userId: 1,
  isModal: false,
};

export const testRollDIcesModal: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.INCOME_ROLL_DICES_MODAL,
    },
  },
};

export const testRollDIcesAction: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.INCOME_ROLL_DICES_ACTION,
    },
  },
};

export const testIncomeBuyModal: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.INCOME_CAN_BUY_MODAL,
    },
  },
};

export const testIncomeTaxPaying: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.INCOME_TAX_PAYING_MODAL,
    },
  },
};

export const testIncomeUnjailModal: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.INCOME_UN_JAIL_MODAL,
    },
  },
};
export const testIncomeAuctionModal: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.INCOME_AUCTION_MODAL,
    },
  },
};

export const testIncomeCOntract: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 1,
      type: IncomeMessageType.INCOME_CONTRACT_MODAL,
    },
  },
};
// 4334663 archive
