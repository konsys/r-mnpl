import { canBuyModal, rollDicesModal } from "handlers/Modals";
import * as actions from "stores/Board/ActionStore";
import { setPlayersEvent } from "stores/Board/PlayersStore";
import { testRollDicesModal } from "testMocks/action";
import { OutcomeMessageType } from "types/types";
import { testPlayer1 } from "testMocks/user";
import { setFieldAction, setFieldsEvent } from "stores/Board/FieldsStore";
import { testField } from "testMocks/field";

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

  it("should throw error in can modal", () => {
    expect(() => canBuyModal(testRollDicesModal)).toThrow(
      "User or Field not found in buy modal"
    );
    setPlayersEvent({ version: 1, players: [testPlayer1] });
    expect(() =>
      canBuyModal({ ...testRollDicesModal, userId: testPlayer1.userId })
    ).toThrow("User or Field not found in buy modal");
    setFieldsEvent({ version: 1, fields: [testField] });
    expect(() =>
      canBuyModal({
        ...testRollDicesModal,
        userId: testPlayer1.userId,
        field: testField,
      })
    ).not.toThrowError();
  });

  it("should send buy field action", () => {
    const mochActionFn = jest.spyOn(actions, "sendBoardAction");
    setPlayersEvent({ version: 1, players: [testPlayer1] });
    setFieldsEvent({ version: 1, fields: [testField] });

    const res = canBuyModal({
      ...testRollDicesModal,
      userId: testPlayer1.userId,
      field: testField,
    });

    const buttons = res.actionButtons;
    expect(mochActionFn).toBeCalledTimes(0);
    // @ts-ignore
    buttons[0].onClick();

    expect(mochActionFn).toBeCalledTimes(1);
    expect(mochActionFn).toBeCalledWith({
      action: OutcomeMessageType.OUTCOME_BUY_FIELD_CLICKED,
    });
  });

  it("should send buy field action", () => {
    setPlayersEvent({
      version: 1,
      players: [{ ...testPlayer1, money: 2000 }],
    });
    setFieldsEvent({
      version: 1,
      fields: [
        // @ts-ignore
        { ...testField, price: { startPrice: 2000, ...testField.price } },
      ],
    });

    let res = canBuyModal({
      ...testRollDicesModal,
      userId: testPlayer1.userId,
      field: testField,
    });
    const buttons = res.actionButtons;

    // @ts-ignore
    expect(buttons[0].disabled).toBe(false);
  });

  it("should send buy field action", () => {
    setPlayersEvent({
      version: 1,
      players: [{ ...testPlayer1, money: 1999 }],
    });
    setFieldsEvent({
      version: 1,
      fields: [
        // @ts-ignore
        { ...testField, price: { startPrice: 2000, ...testField.price } },
      ],
    });

    let res = canBuyModal({
      ...testRollDicesModal,
      userId: testPlayer1.userId,
      field: testField,
    });
    const buttons = res.actionButtons;

    // @ts-ignore
    expect(buttons[0].disabled).toBe(true);
  });

  it("should send to auction field", () => {
    const mochActionFn = jest.spyOn(actions, "sendBoardAction");
    setPlayersEvent({ version: 1, players: [testPlayer1] });
    setFieldsEvent({ version: 1, fields: [testField] });

    const res = canBuyModal({
      ...testRollDicesModal,
      userId: testPlayer1.userId,
      field: testField,
    });

    const buttons = res.actionButtons;
    expect(mochActionFn).toBeCalledTimes(0);
    // @ts-ignore
    buttons[1].onClick();

    expect(mochActionFn).toBeCalledTimes(1);
    expect(mochActionFn).toBeCalledWith({
      action: OutcomeMessageType.OUTCOME_AUCTION_START_CLICKED,
    });
    // @ts-ignore
    expect(buttons[1].disabled).toBe(false);
  });
});
