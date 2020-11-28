import { testToken } from "testMocks/tokens";
import { testPlayer1 } from "testMocks/user";
import { LINE_TRANSITION_TIMEOUT } from "utils/boardParams";
import { fieldPositions } from "utils/fields.utils";
import * as token from "../TokensStore";

describe("Token store test", () => {
  it("should ", () => {
    const f = fieldPositions();
    expect(f).toStrictEqual([
      { left: 32, positionNumber: 0, top: 35 },
      { left: 112, positionNumber: 1, top: 35 },
      { left: 167, positionNumber: 2, top: 35 },
      { left: 222, positionNumber: 3, top: 35 },
      { left: 277, positionNumber: 4, top: 35 },
      { left: 332, positionNumber: 5, top: 35 },
      { left: 387, positionNumber: 6, top: 35 },
      { left: 442, positionNumber: 7, top: 35 },
      { left: 497, positionNumber: 8, top: 35 },
      { left: 552, positionNumber: 9, top: 35 },
      { left: 652, positionNumber: 10, top: 10 },
      { left: 630, positionNumber: 11, top: 112 },
      { left: 630, positionNumber: 12, top: 167 },
      { left: 630, positionNumber: 13, top: 222 },
      { left: 630, positionNumber: 14, top: 277 },
      { left: 630, positionNumber: 15, top: 332 },
      { left: 630, positionNumber: 16, top: 387 },
      { left: 630, positionNumber: 17, top: 442 },
      { left: 630, positionNumber: 18, top: 497 },
      { left: 630, positionNumber: 19, top: 552 },
      { left: 630, positionNumber: 20, top: 632 },
      { left: 553, positionNumber: 21, top: 630 },
      { left: 498, positionNumber: 22, top: 630 },
      { left: 443, positionNumber: 23, top: 630 },
      { left: 388, positionNumber: 24, top: 630 },
      { left: 333, positionNumber: 25, top: 630 },
      { left: 278, positionNumber: 26, top: 630 },
      { left: 223, positionNumber: 27, top: 630 },
      { left: 168, positionNumber: 28, top: 630 },
      { left: 113, positionNumber: 29, top: 630 },
      { left: 33, positionNumber: 30, top: 630 },
      { left: 35, positionNumber: 31, top: 553 },
      { left: 35, positionNumber: 32, top: 498 },
      { left: 35, positionNumber: 33, top: 443 },
      { left: 35, positionNumber: 34, top: 388 },
      { left: 35, positionNumber: 35, top: 333 },
      { left: 35, positionNumber: 36, top: 278 },
      { left: 35, positionNumber: 37, top: 223 },
      { left: 35, positionNumber: 38, top: 168 },
      { left: 35, positionNumber: 39, top: 113 },
    ]);
  });

  it("should set tokens store", async () => {
    // @ts-ignore
    token.setTokensEvent({ test: "rgwrf34r989reg09whfwfewfe" });
    expect(token.tokens$.getState()).toStrictEqual({
      test: "rgwrf34r989reg09whfwfewfe",
    });
  });

  it("should reset tokens store", async () => {
    // @ts-ignore
    token.setTokensEvent({ test: "rgwrf34r989reg09whfwfewfe" });
    expect(token.tokens$.getState()).toStrictEqual({
      test: "rgwrf34r989reg09whfwfewfe",
    });
    token.resetTokens();
    expect(token.tokens$.getState()).toStrictEqual({ tokens: [], version: 0 });
  });

  it("should update all tokens", () => {
    //
    token.setTokensEvent({
      version: 342,
      tokens: [{ ...testToken, userId: 43 }],
    });
    token.updateAllTokens([{ ...testToken, userId: 463 }]);
    expect(token.tokens$.getState()).toStrictEqual({
      version: 343,
      tokens: [{ ...testToken, userId: 463 }],
    });
  });

  it("should update one token", () => {
    //
    token.setTokensEvent({
      version: 465,
      tokens: [{ ...testToken, userId: 43 }],
    });
    token.updateToken({ ...testToken, userId: 245 });
    expect(token.tokens$.getState()).toStrictEqual({
      version: 466,
      tokens: [
        { ...testToken, userId: 43 },
        { ...testToken, userId: 245 },
      ],
    });
  });

  it("should update one token", () => {
    //
    token.setTokensEvent({
      version: 434,
      tokens: [{ ...testToken, userId: 43 }],
    });
    token.updateToken({ ...testToken, userId: 43 });
    expect(token.tokens$.getState()).toStrictEqual({
      version: 435,
      tokens: [{ ...testToken, userId: 43 }],
    });
  });

  it("should run token transition one line", () => {
    jest.useFakeTimers();

    token.tokenTransition(
      { ...testToken, meanPosition: 0 },
      { ...testPlayer1, meanPosition: 10 }
    );
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      LINE_TRANSITION_TIMEOUT
    );
  });

  it("should run token transition two line", () => {
    jest.useFakeTimers();

    token.tokenTransition(
      { ...testToken, meanPosition: 0 },
      { ...testPlayer1, meanPosition: 20 }
    );
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      LINE_TRANSITION_TIMEOUT * 2
    );
  });
  it("should run token transition three line", () => {
    jest.useFakeTimers();

    token.tokenTransition(
      { ...testToken, meanPosition: 0 },
      { ...testPlayer1, meanPosition: 30 }
    );
    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      LINE_TRANSITION_TIMEOUT * 3
    );
  });
  it("should run token transition three line", () => {
    jest.useFakeTimers();

    token.tokenTransition(
      { ...testToken, meanPosition: 0 },
      { ...testPlayer1, meanPosition: 39 }
    );
    expect(setTimeout).toHaveBeenCalledTimes(4);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      LINE_TRANSITION_TIMEOUT * 4
    );
  });
});
