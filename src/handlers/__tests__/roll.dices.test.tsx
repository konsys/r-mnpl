import { rollDicesModal } from "handlers/Modals";
import * as actions from "stores/Board/ActionStore";
import { testRollDicesModal } from "testMocks/action";
import { OutcomeMessageType } from "types/types";

describe("Modals test", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should show roll dices modal", () => {
    const mochActionFn = jest.spyOn(actions, "sendBoardAction");

    const res = rollDicesModal(testRollDicesModal);
    // @ts-ignore
    res.actionButtons[0].onClick();
    // @ts-ignore
    expect(res.actionButtons[0].disabled).toBe(false);
    expect(mochActionFn).toBeCalledTimes(1);
    expect(mochActionFn).toBeCalledWith({
      action: OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED,
    });
  });
});
