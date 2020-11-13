import { rollDicesModal } from "handlers/Modals";
import * as actions from "stores/Board/ActionStore";
import { testRollDicesModal } from "testMocks/action";
import { OutcomeMessageType } from "types/types";

describe("Modals test", () => {
  it("should handle error", () => {
    const mochActionFn = jest.spyOn(actions, "sendBoardAction");

    const res = rollDicesModal(testRollDicesModal);
    // @ts-ignore
    res.actionButtons[0].onClick();
    expect(mochActionFn).toBeCalledTimes(1);
    expect(mochActionFn).toBeCalledWith({
      action: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
    });
  });
});
