import { RoomType, preparatoryRoom$ } from "stores/Game/Rooms/RoomsModel";
import {
  closeRoomModal,
  openRoomModal,
} from "stores/Game/Rooms/RoomsModalModel";
import { testUser, testVipUser } from "testMocks/user";

import CreateRoomModal from "../CreateRoomModal";
import React from "react";
import { setUserEvent } from "stores/Game/User/UserModel";
import { shallow } from "enzyme";

describe("Create room modal test", () => {
  beforeEach(() => {
    openRoomModal();
  });
  it("should render", () => {
    expect(shallow(<CreateRoomModal />)).toMatchSnapshot();
  });

  it("should render regular", () => {
    shallow(<CreateRoomModal />)
      .find(".regular")
      .simulate("click");
    expect(preparatoryRoom$.getState().roomType).toStrictEqual(
      RoomType.REGULAR
    );
  });

  it("should render quick", () => {
    shallow(<CreateRoomModal />)
      .find(".quick")
      .simulate("click");
    expect(preparatoryRoom$.getState().roomType).toStrictEqual(RoomType.QUICK);
  });

  it("should render shuffle", () => {
    shallow(<CreateRoomModal />)
      .find(".shuffle")
      .simulate("click");
    expect(preparatoryRoom$.getState().roomType).toStrictEqual(
      RoomType.SHUFFLE
    );
  });
  it("should render retro", () => {
    shallow(<CreateRoomModal />)
      .find(".retro")
      .simulate("click");
    expect(preparatoryRoom$.getState().roomType).toStrictEqual(RoomType.RETRO);
  });
  it("should render roulette", () => {
    shallow(<CreateRoomModal />)
      .find(".roulette")
      .simulate("click");
    expect(preparatoryRoom$.getState().roomType).toStrictEqual(
      RoomType.ROULETTE
    );
  });

  it("should render enabled button", () => {
    setUserEvent(testVipUser);

    expect(
      shallow(<CreateRoomModal />)
        .find("._create-game-button")
        .prop("disabled")
    ).toBe(false);
    setUserEvent(testUser);
    expect(
      shallow(<CreateRoomModal />)
        .find("._create-game-button")
        .prop("disabled")
    ).toBe(true);
  });
});
