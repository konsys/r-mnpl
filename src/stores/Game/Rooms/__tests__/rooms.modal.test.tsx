import { test4Room } from "testMocks/room";
import { roomModal$, closeRoomModal, openRoomModal } from "../RoomsModalModel";
import { rooms$, setRooms } from "../RoomsModel";

describe("Test room model", () => {
  beforeEach(() => closeRoomModal());
  it("should have default value", () => {
    expect(roomModal$.getState()).toBe(false);
  });

  it("should open modal", () => {
    expect(roomModal$.getState()).toBe(false);
    openRoomModal();
    expect(roomModal$.getState()).toBe(true);
  });

  it("should close modal", () => {
    openRoomModal();
    expect(roomModal$.getState()).toBe(true);
    closeRoomModal();
    expect(roomModal$.getState()).toBe(false);
  });

  it("should reset rooms store", async () => {
    openRoomModal();
    // @ts-ignore
    setRooms({
      playersInRooms: 1,
      rooms: [test4Room],
    });
    expect(rooms$.getState()).toStrictEqual({
      playersInRooms: 1,
      rooms: [test4Room],
    });
    closeRoomModal();
    expect(roomModal$.getState()).toBe(false);
    expect(rooms$.getState()).toStrictEqual({
      playersInRooms: 0,
      rooms: [],
    });
  });
});
