import { ICurrentAction } from "stores/Board/ActionStore";
import { IncomeMessageType } from "types/types";

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
