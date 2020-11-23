import {
  players$,
  initPlayers,
  resetPlayersEvent,
  setPlayersEvent,
  getInitPlayersFx,
} from "../PlayersStore";

import * as tokens from "../TokensStore";

jest.describe("Name of the group", () => {
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
    // @ts-ignore
    setPlayersEvent(4234234234);
  });
});
