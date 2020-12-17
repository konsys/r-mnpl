const {
  preparatoryRoom$,
  resetCurrentRoom,
  initPreparatoryRoom,
  updatePreparatoryRoom,
  toggleAutostart,
  togglePrivateRoom,
  togglRestarts,
  toggleRoomSwitch,
} = require("../RoomsModel");

describe("Rooms model test", () => {
  beforeEach(() => resetCurrentRoom());
  it("should have default value", () => {
    expect(preparatoryRoom$.getState()).toStrictEqual(initPreparatoryRoom);
  });

  it("should update preparatory room", () => {
    updatePreparatoryRoom("wfwefwfwfwfwf");
    expect(preparatoryRoom$.getState()).toStrictEqual("wfwefwfwfwfwf");
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
    updatePreparatoryRoom("wfwefwfwfwfwf");
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
    expect(preparatoryRoom$.getState().restarts).toBe(false);
    toggleRoomSwitch("restarts");
    expect(preparatoryRoom$.getState().restarts).toBe(true);
  });
});
