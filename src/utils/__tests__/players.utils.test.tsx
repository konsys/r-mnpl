import { players$, setPlayersEvent } from "stores/Board/PlayersStore";
import {
  getPlayer,
  getActingPlayer,
  getActingPlayerIndex,
  updatePlayer,
} from "utils/players.utils";

describe("Players utils test", () => {
  beforeEach(() => {
    setPlayersEvent({
      version: 1,
      players: [
        // @ts-ignore
        { userId: 1, isActing: false },
        // @ts-ignore
        { userId: 2, isActing: true },
        // @ts-ignore
        { userId: 3, isActing: false },
      ],
    });
  });
  it("should get 1 player", () => {
    expect(getPlayer(1)).toStrictEqual({ userId: 1, isActing: false });
  });

  it("should get 3 player", () => {
    expect(getPlayer(3)).toStrictEqual({ userId: 3, isActing: false });
  });
  it("should get 3 player", () => {
    expect(getPlayer(4)).toBeUndefined();
  });
  it("should get null player", () => {
    // @ts-ignore
    setPlayersEvent(null);
    expect(getPlayer(4)).toBeUndefined();
  });

  it("should get acting player", () => {
    expect(getActingPlayer()).toStrictEqual({ userId: 2, isActing: true });
    expect(getActingPlayerIndex()).toBe(1);
  });

  it("should not get acting player", () => {
    setPlayersEvent({
      players: [
        // @ts-ignore
        { userId: 1, isActing: false },
        // @ts-ignore
        { userId: 2, isActing: false },
        // @ts-ignore
        { userId: 3, isActing: false },
      ],
    });
    expect(getActingPlayer()).toBeUndefined();
    expect(getActingPlayerIndex()).toBeUndefined();
  });
  it("should get player index", () => {
    setPlayersEvent({
      players: [
        // @ts-ignore
        { userId: 1, isActing: false },
        // @ts-ignore
        { userId: 2, isActing: false },
        // @ts-ignore
        { userId: 3, isActing: false },
      ],
    });
    expect(getActingPlayer()).toBeUndefined();
    expect(getActingPlayerIndex()).toBeUndefined();
  });

  it("should update player", () => {
    // @ts-ignore
    const res = updatePlayer({ userId: 2, isActing: true, jailed: 2 });
    expect(players$.getState()).toStrictEqual({
      version: 2,
      players: [
        // @ts-ignore
        { userId: 1, isActing: false },
        // @ts-ignore
        { userId: 2, isActing: true, jailed: 2 },
        // @ts-ignore
        { userId: 3, isActing: false },
      ],
    });
    expect(res).toBeTruthy();
  });

  it("should not update player", () => {
    // @ts-ignore
    const res = updatePlayer({ userId: 4, isActing: true, jailed: 2 });
    expect(players$.getState()).toStrictEqual({
      version: 1,
      players: [
        // @ts-ignore
        { userId: 1, isActing: false },
        // @ts-ignore
        { userId: 2, isActing: true },
        // @ts-ignore
        { userId: 3, isActing: false },
      ],
    });
    expect(res).toBeFalsy();
  });
});
