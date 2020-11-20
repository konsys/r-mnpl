import * as action from "stores/Board/DicesStore";
import { rollDicesAction } from "handlers/DicesHandler";
import { testDices } from "testMocks/dices";

describe("Dices handler test", () => {
  it("should handle dices", () => {
    const mochDicesFn = jest.spyOn(action, "showDices");

    rollDicesAction(testDices);
    expect(mochDicesFn).toBeCalledTimes(1);
    expect(mochDicesFn).toBeCalledWith(testDices);
  });
});
