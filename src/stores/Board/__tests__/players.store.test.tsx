import {
  players$,
  initPlayers,
  resetPlayersEvent,
  setPlayersEvent,
  getInitPlayersFx,
} from "../PlayersStore";

import * as tokens from "../TokensStore";
import { testToken } from "testMocks/tokens";
import { testPlayer1, testPlayer2 } from "testMocks/user";

describe("Name of the group", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should have init value", () => {
    expect(players$.getState()).toStrictEqual(initPlayers);
  });

  it("should set players", () => {
    // @ts-ignore
    setPlayersEvent("2342rfwefh023y02h3focahdf9o823y405gipyaduiwsgf");
    expect(players$.getState()).toBe(
      "2342rfwefh023y02h3focahdf9o823y405gipyaduiwsgf"
    );
  });
  it("should reset players", () => {
    // @ts-ignore
    setPlayersEvent("2342ry02h3fosdfsfsdfsdfcahdf9o823y405gipyaduiwsgf");
    expect(players$.getState()).toBe(
      "2342ry02h3fosdfsfsdfsdfcahdf9o823y405gipyaduiwsgf"
    );
    resetPlayersEvent();
    expect(players$.getState()).toStrictEqual(initPlayers);
  });
  it("should upload init players", async () => {
    getInitPlayersFx({ ids: [1, 2, 3], gameId: "testGameId" });

    // @ts-ignore
    setPlayersEvent("2342ry02h3fosdfsfsdfsdfcahdf9o823y405gipyaduiwsgf");
    expect(players$.getState()).toBe(
      "2342ry02h3fosdfsfsdfsdfcahdf9o823y405gipyaduiwsgf"
    );
    resetPlayersEvent();
    expect(players$.getState()).toStrictEqual(initPlayers);
  });

  it("should move tokens after set players", async () => {
    const testMock = jest.spyOn(tokens, "moveTokenAfterPlayerUpdate");
    tokens.setTokensEvent({
      version: 1,
      tokens: [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
    });

    const players = [
      {
        ...testPlayer1,
        userId: 1,
      },
      {
        ...testPlayer2,
        userId: 2,
      },
    ];
    setPlayersEvent({
      version: 1,
      players,
    });
    expect(testMock).toBeCalledTimes(players.length);
  });
});
