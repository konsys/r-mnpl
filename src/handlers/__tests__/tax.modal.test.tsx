import { taxModal } from "handlers/Modals";
import * as actions from "stores/Board/ActionStore";
import { setPlayersEvent } from "stores/Board/PlayersStore";
import { testRollDicesModal } from "testMocks/action";
import { testPlayer1 } from "testMocks/user";
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
    const res = taxModal({ ...testRollDicesModal, money: 123456 });
    // @ts-ignore
    expect(res.actionButtons[0].title).toBe("Заплатить 123456k");
  });

  it("should send pay action", () => {
    setPlayersEvent({ version: 1, players: [{ ...testPlayer1, money: 999 }] });
    // @ts-ignore
    const res = taxModal({ ...testRollDicesModal, money: 1000 });
    // @ts-ignore
    expect(res.actionButtons[0].disabled).toBe(true);
  });

  it("should send pay action", () => {
    setPlayersEvent({ version: 1, players: [{ ...testPlayer1, money: 999 }] });
    // @ts-ignore
    const res = taxModal({ ...testRollDicesModal, money: -1000 });
    // @ts-ignore
    expect(res.actionButtons[0].disabled).toBe(true);
  });

  it("should send pay action", () => {
    setPlayersEvent({
      version: 1,
      players: [
        { ...testPlayer1, userId: testRollDicesModal.userId, money: 1000 },
      ],
    });
    // @ts-ignore
    const res = taxModal({ ...testRollDicesModal, money: 999 });
    // @ts-ignore
    expect(res.actionButtons[0].disabled).toBe(false);
  });

  it("should send pay action", () => {
    setPlayersEvent({
      version: 1,
      players: [
        { ...testPlayer1, userId: testRollDicesModal.userId, money: 1000 },
      ],
    });
    // @ts-ignore
    const res = taxModal({
      ...testRollDicesModal,
      money: -999,
    });
    // @ts-ignore
    expect(res.actionButtons[0].disabled).toBe(false);
  });
});
