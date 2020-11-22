import * as action from "../FieldActionStore";

describe("Contract store test", () => {
  beforeEach(() => jest.clearAllTimers());
  it("should involve timeout", async () => {
    action.setFieldAction(1);
    const actionRes = await action.waitForNumber(10);
    expect(actionRes).toStrictEqual(10);
  });
  it("should wait for number", async () => {
    action.setFieldAction(0);
    const actionRes = await action.waitForNumber(0);
    expect(actionRes).toBe(0);
  });
  it("should set field action with zero", () => {
    action.setFieldAction(0);
    const actionRes = action.fieldAction$.getState();
    expect(actionRes).toBe(0);
  });
  it("should set field action with positive number", () => {
    action.setFieldAction(123123);
    const actionRes = action.fieldAction$.getState();
    expect(actionRes).toBe(123123);
  });

  it("should set field action with negative number", async () => {
    await action.setFieldActionFx(-23423423);
    const actionRes = action.fieldAction$.getState();
    expect(actionRes).toBe(-23423423);
  });

  it("should close action", async () => {
    await action.setFieldActionFx(-23423423);
    let actionRes = action.fieldAction$.getState();
    expect(actionRes).toBe(-23423423);
    action.closeFieldAction();
    actionRes = action.fieldAction$.getState();
    expect(actionRes).toBe(0);
  });
});
