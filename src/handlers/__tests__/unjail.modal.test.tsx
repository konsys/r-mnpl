import { unJailModal } from "handlers/Modals";
import * as actions from "stores/Board/ActionStore";
import { setPlayersEvent } from "stores/Board/PlayersStore";
import { testRollDicesModal } from "testMocks/action";
import { testPlayer1 } from "testMocks/user";
import { OutcomeMessageType } from "types/types";
describe("Modals test", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should send pay action", () => {
    const mochActionFn = jest.spyOn(actions, "sendBoardAction");

    const res = unJailModal({ ...testRollDicesModal });
    // @ts-ignore
    res.actionButtons[0].onClick();
    expect(mochActionFn).toBeCalledTimes(1);
    expect(mochActionFn).toBeCalledWith({
      action: OutcomeMessageType.OUTCOME_UN_JAIL_PAID_CLICKED,
    });
  });

  it("should send pay action", () => {
    const res = unJailModal({ ...testRollDicesModal, money: 123456 });
    // @ts-ignore
    expect(res.actionButtons[0].title).toBe("Выйти под залог 500k");
  });

  it("should send pay action", () => {
    setPlayersEvent({ version: 1, players: [{ ...testPlayer1, money: 999 }] });
    // @ts-ignore
    const res = unJailModal({ ...testRollDicesModal, money: 1000 });
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
    const res = unJailModal({ ...testRollDicesModal, money: -999 });
    // @ts-ignore
    expect(res.actionButtons[0].disabled).toBe(false);
  });
});
