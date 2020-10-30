import PendingRoomBlock from "../PendingRoomBlock";
import React from "react";
import RoomAvatar from "../RoomAvatar";
import RoomTypeView from "../RoomTypeView";
import { shallow } from "enzyme";
import { testRoom } from "testMocks/room";

describe("Room block test", () => {
  it("should render", () => {
    expect(
      shallow(<PendingRoomBlock room={testRoom} iHaveRoom={true} userId={1} />)
    ).toMatchSnapshot();
  });

  it("should render RoomTypeView", () => {
    expect(
      shallow(
        <PendingRoomBlock room={testRoom} iHaveRoom={true} userId={1} />
      ).find(RoomTypeView)
    ).toHaveLength(1);
  });

  it("should render RoomTypeView props", () => {
    expect(
      shallow(<PendingRoomBlock room={testRoom} iHaveRoom={true} userId={1} />)
        .find(RoomTypeView)
        .get(0).props.room
    ).toStrictEqual(testRoom);
  });

  it("should render RoomTypeViewp imgs", () => {
    expect(
      shallow(
        <PendingRoomBlock room={testRoom} iHaveRoom={true} userId={1} />
      ).find(RoomAvatar)
    ).toHaveLength(testRoom.playersNumber);
  });
});
