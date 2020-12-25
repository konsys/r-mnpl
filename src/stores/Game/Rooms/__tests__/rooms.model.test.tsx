import {
  preparatoryRoom$,
  resetCurrentRoom,
  initPreparatoryRoom,
  setPreparatoryRoom,
  toggleAutostart,
  togglePrivateRoom,
  togglRestarts,
  toggleRoomSwitch,
  createRoom,
  rooms$,
  resetRoomsStore,
  myPendingRoom$,
  setRooms,
  myRoomsReset,
  setMyPendingRoom,
} from "../RoomsModel";

import * as http from "http/client";
import { setUser, logout } from "stores/Game/User/UserModel";
import { test4Room, testPendingRoom1 } from "testMocks/room";
import { test5User } from "testMocks/user";
import { PlayerRoomStatus } from "../RoomsModel";
import { testPlayer1 } from "testMocks/user";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    post: jest.fn().mockImplementation(() => ({
      data: {
        accessToken: "he4rr3rtg6wscfokwnef324o85y2hbfklsjbf45rqwe6gerg",
      },
    })),
  },
}));

describe("Rooms model test", () => {
  beforeEach(() => {
    resetCurrentRoom();
    jest.clearAllMocks();
    logout();
    myRoomsReset();
    resetRoomsStore();
  });
  it("should have default value", () => {
    expect(preparatoryRoom$.getState()).toStrictEqual(initPreparatoryRoom);
  });

  it("should update preparatory room", () => {
    setPreparatoryRoom({ ...test4Room, ...initPreparatoryRoom });
    expect(preparatoryRoom$.getState()).toStrictEqual({
      ...test4Room,
      ...initPreparatoryRoom,
    });
  });

  it("should toggle autostart", () => {
    expect(preparatoryRoom$.getState().autostart).toBe(true);
    toggleAutostart();
    expect(preparatoryRoom$.getState().autostart).toBe(false);
  });

  it("should toggle private", () => {
    expect(preparatoryRoom$.getState().privateRoom).toBe(false);
    togglePrivateRoom();
    expect(preparatoryRoom$.getState().privateRoom).toBe(true);
  });

  it("should toggle restarts", () => {
    expect(preparatoryRoom$.getState().restarts).toBe(false);
    togglRestarts();
    expect(preparatoryRoom$.getState().restarts).toBe(true);
  });

  it("should reset preparatory store", () => {
    // @ts-ignore
    setPreparatoryRoom("wfwefwfwfwfwf");
    expect(preparatoryRoom$.getState()).toStrictEqual("wfwefwfwfwfwf");
    resetCurrentRoom();
    expect(preparatoryRoom$.getState()).toStrictEqual(initPreparatoryRoom);
  });

  it("should switch autostart", () => {
    expect(preparatoryRoom$.getState().autostart).toBe(true);
    toggleRoomSwitch("autostart");
    expect(preparatoryRoom$.getState().autostart).toBe(false);
  });

  it("should switch privateRoom", () => {
    expect(preparatoryRoom$.getState().privateRoom).toBe(false);
    toggleRoomSwitch("privateRoom");
    expect(preparatoryRoom$.getState().privateRoom).toBe(true);
  });

  it("should switch restarts", () => {
    expect(preparatoryRoom$.getState().restarts).toBe(false);
    toggleRoomSwitch("restarts");
    expect(preparatoryRoom$.getState().restarts).toBe(true);
  });

  it("should create room", () => {
    setPreparatoryRoom({ ...test4Room, ...initPreparatoryRoom });
    setUser(test5User);
    createRoom("refgewgq34t5g345gtfewrf");
    expect(http.client.post).toHaveBeenCalledTimes(1);
    expect(http.client.post).toHaveBeenCalledWith("/rooms", {
      room: {
        ...initPreparatoryRoom,
        creatorId: test5User.userId,
        players: [{ ...test5User, playerRoomStatus: PlayerRoomStatus.ACITVE }],
        roomId: "refgewgq34t5g345gtfewrf",
      },
    });
  });

  it("should not create room without user", () => {
    setPreparatoryRoom({ ...test4Room, ...initPreparatoryRoom });
    expect(http.client.post).not.toHaveBeenCalled();
  });

  it("should set Rooms", () => {
    expect(rooms$.getState()).toStrictEqual({ playersInRooms: 0, rooms: [] });
    // @ts-ignore
    setRooms("wefwcsfwef36tegpref");
    expect(rooms$.getState()).toStrictEqual("wefwcsfwef36tegpref");
    resetRoomsStore();
    expect(rooms$.getState()).toStrictEqual({ playersInRooms: 0, rooms: [] });
  });

  it("should set myPendingRoom", () => {
    expect(myPendingRoom$.getState()).toStrictEqual(null);
    // @ts-ignore
    setMyPendingRoom("wefwcsfwefewfwef36tegpref");
    expect(myPendingRoom$.getState()).toStrictEqual(
      "wefwcsfwefewfwef36tegpref"
    );
    myRoomsReset();
    expect(myPendingRoom$.getState()).toStrictEqual(null);
  });

  it("should set myPendingRoom on rooms update", () => {
    expect(myPendingRoom$.getState()).toStrictEqual(null);

    setRooms({ rooms: [testPendingRoom1], playersInRooms: 1 });
    setUser(testPlayer1);
    expect(myPendingRoom$.getState()).toStrictEqual(testPendingRoom1);
  });

  it("should not set myPendingRoom without player", () => {
    expect(myPendingRoom$.getState()).toStrictEqual(null);

    setRooms({ rooms: [testPendingRoom1], playersInRooms: 1 });

    expect(myPendingRoom$.getState()).toStrictEqual(null);
  });

  it("should not set myPendingRoom without room", () => {
    expect(myPendingRoom$.getState()).toStrictEqual(null);

    setUser(testPlayer1);
    expect(myPendingRoom$.getState()).toStrictEqual(null);
  });
});
