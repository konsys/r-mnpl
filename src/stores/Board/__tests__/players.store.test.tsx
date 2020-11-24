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
import * as http from "http/client";

jest.mock("http/client", () => ({
  // ...jest.requireActual("http/client"),

  client: {
    get: jest.fn().mockImplementation(() => ({
      data: [{ userId: 3246435, meanPosition: 0, jailed: 0 }],
    })),
  },
}));
describe("Name of the group", () => {
  afterEach(() => jest.clearAllMocks());

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

  it("should not move tokens after set players if no tokens", async () => {
    // @ts-ignore
    tokens.setTokensEvent(null);
    const testMock1 = jest.spyOn(tokens, "moveTokenAfterPlayerUpdate");

    setPlayersEvent({
      version: 1,
      players: [testPlayer1],
    });
    expect(testMock1).not.toBeCalled();
  });

  it("should not move tokens after set players if no players", async () => {
    const testMock = jest.spyOn(tokens, "moveTokenAfterPlayerUpdate");
    tokens.setTokensEvent({
      version: 1,
      tokens: [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
      ],
    });
    setPlayersEvent({
      version: 1,
      players: [],
    });
    expect(testMock).not.toBeCalled();
  });

  it("should move tokens after set players", async () => {
    const testMock = jest.spyOn(tokens, "moveTokenAfterPlayerUpdate");
    tokens.setTokensEvent({
      version: 1,
      tokens: [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
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
      {
        ...testPlayer2,
        userId: 3,
      },
    ];
    setPlayersEvent({
      version: 1,
      players,
    });
    expect(testMock).toBeCalledTimes(players.length);
    expect(testMock).toHaveBeenNthCalledWith(
      1,
      { ...testToken, userId: 1 },
      {
        ...testPlayer1,
        userId: 1,
      }
    );
    expect(testMock).toHaveBeenNthCalledWith(
      2,
      { ...testToken, userId: 2 },
      {
        ...testPlayer2,
        userId: 2,
      }
    );
    expect(testMock).toHaveBeenNthCalledWith(
      3,
      { ...testToken, userId: 3 },
      {
        ...testPlayer2,
        userId: 3,
      }
    );
  });

  it("should init players", async () => {
    await getInitPlayersFx({ ids: [1, 2], gameId: "testGameId" });

    expect(http.client.get).toHaveBeenCalledTimes(1);
    expect(http.client.get).toHaveBeenCalledWith("/users/init", {
      params: { gameId: "testGameId", ids: [1, 2] },
    });
    expect(players$.getState()).toStrictEqual({
      version: 1,
      players: [{ jailed: 0, meanPosition: 0, userId: 3246435 }],
    });
  });
});
