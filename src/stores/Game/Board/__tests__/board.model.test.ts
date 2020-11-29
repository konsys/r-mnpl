import * as board from "../BoardModel";
import { setRooms } from "../../Rooms/RoomsModel";
import * as http from "http/client";
import {
  testPlayingRoom,
  testRoomsResponce,
  testPendingRoomsResponce,
} from "testMocks/room";
import { setUser } from "stores/Game/User/UserModel";
import { testUser } from "testMocks/user";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    get: jest.fn().mockImplementation(() => ({
      data: { result: "dfvdfvdfvdfvdv3534jtrgergre" },
    })),
    post: jest.fn().mockImplementation(() => ({
      data: { result: "dfvdfvdfvdfvdv3534jtrgergre" },
    })),
  },
}));

describe("Name of the group", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    board.resetBoardGame();
  });
  it("should get room", async () => {
    await board.getRoomFx("testRoomIdp423tjo3rkf=w0kjg-34ju");

    expect(http.client.get).toHaveBeenCalledTimes(1);

    expect(http.client.get).toHaveBeenCalledWith(
      "/rooms/testRoomIdp423tjo3rkf=w0kjg-34ju"
    );
  });

  it("should get first room", async () => {
    setRooms({
      ...testRoomsResponce,
      rooms: [
        { ...testPlayingRoom, creatorId: 24234 },
        ...testRoomsResponce.rooms,
      ],
    });

    expect(board.boardGame$.getState()).toStrictEqual({
      ...testPlayingRoom,
      creatorId: 24234,
    });
  });

  it("should get first playing room", async () => {
    setRooms({
      ...testPendingRoomsResponce,
      rooms: [
        ...testPendingRoomsResponce.rooms,
        { ...testPlayingRoom, creatorId: 242534 },
      ],
    });

    expect(board.boardGame$.getState()).toStrictEqual({
      ...testPlayingRoom,
      creatorId: 242534,
    });
  });

  it("should set board after get room", async () => {
    await board.getRoomFx("sdflknpiwrhgpncwnef878");

    expect(board.boardGame$.getState()).toStrictEqual({
      result: "dfvdfvdfvdfvdv3534jtrgergre",
    });
  });
  it("should reset board game store", async () => {
    await board.getRoomFx("sdflknpiwrhgpncwnef878");
    expect(board.boardGame$.getState()).not.toBe(null);
    board.resetBoardGame();
    expect(board.boardGame$.getState()).toBe(null);
  });

  it("should surrender player", async () => {
    setRooms({
      ...testRoomsResponce,
      rooms: [
        {
          ...testPlayingRoom,
          creatorId: 24234,
          roomId: "fsdfw4r4fhosifhw0e8yfr0whfs",
        },
      ],
    });
    setUser({ ...testUser, userId: 54357 });
    board.surrenderRoom();

    expect(http.client.post).toHaveBeenCalledTimes(1);

    expect(http.client.post).toHaveBeenCalledWith("board/surrender", {
      roomId: "fsdfw4r4fhosifhw0e8yfr0whfs",
      userId: 54357,
    });
  });
});
