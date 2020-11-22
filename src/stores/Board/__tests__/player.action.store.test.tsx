import {
  openPlayerAction,
  playerAction$,
  initPlayerAction,
  closePlayerAction,
} from "../PLayerActionStore";

describe("Name of the group", () => {
  it("should have init state", () => {
    expect(playerAction$.getState()).toStrictEqual(initPlayerAction);
  });
  it("should set player action", () => {
    // @ts-ignore
    openPlayerAction(3545345435);
    expect(playerAction$.getState()).toBe(3545345435);
  });

  it("should close player action", () => {
    closePlayerAction();
    expect(playerAction$.getState()).toStrictEqual(initPlayerAction);
  });
});
