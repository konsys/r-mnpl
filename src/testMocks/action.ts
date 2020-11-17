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
