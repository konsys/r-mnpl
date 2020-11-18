import { ICurrentAction } from "stores/Board/ActionStore";
import {
  BoardAction,
  IncomeMessageType,
  OutcomeMessageType,
} from "types/types";
import { testContract } from "./contract";

export const testDoNothingAction: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 234361,
      type: IncomeMessageType.DO_NOTHING,
    },
  },
};

export const testRollDicesModal: BoardAction = {
  _id: "testBoardAction",
  type: IncomeMessageType.INCOME_ROLL_DICES_MODAL,

  userId: 1353572354,
  title: "testTitleRollDices",
  text: "testTextRollDices",
  isModal: true,
};

export const testRollDicesClicked: BoardAction = {
  _id: "testBoardAction",
  type: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
  userId: 12343643,
  isModal: false,
};

export const testRollDIcesModal: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      _id: "testID",
      isModal: false,
      userId: 123436345,
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
      userId: 123448765,
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
      userId: 12346746,
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
      userId: 123425,
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
      userId: 345341,
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
      userId: 2341,
      type: IncomeMessageType.INCOME_AUCTION_MODAL,
    },
  },
};

export const testIncomeContract: ICurrentAction = {
  actionId: "testActionId",
  event: {
    action: {
      contract: testContract,
      _id: "testID",
      isModal: false,
      userId: 1424236,
      type: IncomeMessageType.INCOME_CONTRACT_MODAL,
    },
  },
};
// 4334663 archive
