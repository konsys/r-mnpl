import { IncomeMessageType } from "types/types";
import { showDices, dices$, hideDices, initDices } from "../DicesStore";

describe("Contract store test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });
  it("should show dices", () => {
    expect(dices$.getState()).toStrictEqual({
      type: IncomeMessageType.DO_NOTHING,
      userId: 1,
      dices: [0, 0, 0],
      dicesSum: 0,
      _id: "",
      isModal: false,
    });
  });

  it("should show dices", () => {
    showDices({
      type: IncomeMessageType.INCOME_ROLL_DICES_ACTION,
      userId: 124234,
      dices: [1, 2, 3],
      dicesSum: 6,
      _id: "sdfwerfwef",
      isModal: false,
    });
    expect(dices$.getState()).toStrictEqual({
      type: IncomeMessageType.INCOME_ROLL_DICES_ACTION,
      userId: 124234,
      dices: [1, 2, 3],
      dicesSum: 6,
      _id: "sdfwerfwef",
      isModal: false,
    });
  });

  it("should call timeout", () => {
    jest.useFakeTimers();

    showDices({
      type: IncomeMessageType.INCOME_ROLL_DICES_ACTION,
      userId: 124234,
      dices: [1, 2, 3],
      dicesSum: 6,
      _id: "sdfwerfwef",
      isModal: false,
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2500);
  });

  it("should reset dices", () => {
    hideDices();
    expect(dices$.getState()).toStrictEqual(initDices);
  });
});
