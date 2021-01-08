import { error$, setError, clearError } from "../ErrorModel";
describe("Error model test", () => {
  it("should set error", () => {
    expect(error$.getState()).toBeNull();
    setError("egonw340rt5h09]rerfg");
    expect(error$.getState()).toBe("egonw340rt5h09]rerfg");
    clearError();
    expect(error$.getState()).toBeNull();
  });
});
