import * as toasty from "react-toastify";
import { errorHandler, IGameError } from "handlers/ErrorHandler";
import { ErrorCode } from "utils/errors";

describe("Modals test", () => {
  it("should handle error", () => {
    const mochDicesFn = jest.spyOn(toasty, "toast");
    const error: IGameError = {
      code: 101,
      message: "testErrorMessage",
    };

    errorHandler(error);
    expect(mochDicesFn).toBeCalledTimes(1);
    expect(mochDicesFn).toBeCalledWith(ErrorCode[error.code]);
  });
});
