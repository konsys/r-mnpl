import { testToken } from "testMocks/tokens";
import { fieldPositions } from "utils/fields.utils";
import {
  tokens$,
  setTokensEvent,
  resetTokens,
  updateAllTokens,
  updateToken,
} from "../TokensStore";

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
    setTokensEvent({ test: "rgwrf34r989reg09whfwfewfe" });
    expect(tokens$.getState()).toStrictEqual({
      test: "rgwrf34r989reg09whfwfewfe",
    });
  });

  it("should reset tokens store", async () => {
    // @ts-ignore
    setTokensEvent({ test: "rgwrf34r989reg09whfwfewfe" });
    expect(tokens$.getState()).toStrictEqual({
      test: "rgwrf34r989reg09whfwfewfe",
    });
    resetTokens();
    expect(tokens$.getState()).toStrictEqual({ tokens: [], version: 0 });
  });

  it("should update all tokens", () => {
    //
    setTokensEvent({ version: 342, tokens: [{ ...testToken, userId: 43 }] });
    updateAllTokens([{ ...testToken, userId: 463 }]);
    expect(tokens$.getState()).toStrictEqual({
      version: 343,
      tokens: [{ ...testToken, userId: 463 }],
    });
  });

  it("should update one token", () => {
    //
    setTokensEvent({ version: 465, tokens: [{ ...testToken, userId: 43 }] });
    updateToken({ ...testToken, userId: 245 });
    expect(tokens$.getState()).toStrictEqual({
      version: 466,
      tokens: [
        { ...testToken, userId: 43 },
        { ...testToken, userId: 245 },
      ],
    });
  });
});
