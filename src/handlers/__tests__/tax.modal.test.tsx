import { taxModal } from "handlers/Modals";
import * as actions from "stores/Board/ActionStore";
import { testRollDicesModal } from "testMocks/action";
import { OutcomeMessageType } from "types/types";
describe("Modals test", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should send pay action", () => {
    const mochActionFn = jest.spyOn(actions, "sendBoardAction");

    const res = taxModal({ ...testRollDicesModal });
    // @ts-ignore
    res.actionButtons[0].onClick();
    expect(mochActionFn).toBeCalledTimes(1);
    expect(mochActionFn).toBeCalledWith({
      action: OutcomeMessageType.OUTCOME_TAX_PAID_CLICKED,
    });
  });

  it("should send pay action", () => {
    const res = taxModal({ ...testRollDicesModal, money: 123456 });
    // @ts-ignore
    expect(res.actionButtons[0].title).toBe("Заплатить 123456k");
  });

  it("should send pay action", () => {
    const res = taxModal({ ...testRollDicesModal, money: -123456 });
    // @ts-ignore
    expect(res.actionButtons[0].title).toBe("Заплатить 123456k");
  });

  it("should send pay action", () => {
    const res = taxModal({ ...testRollDicesModal, money: 123456 });
    // @ts-ignore
    expect(res.actionButtons[0].title).toBe("Заплатить 123456k");
  });

  it("should send pay action", () => {
    // @ts-ignore
    const res = taxModal({ ...testRollDicesModal, money: null });
    // @ts-ignore
    expect(res.actionButtons[0].title).toBe("Заплатить 0k");
  });
});
