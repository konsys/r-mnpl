import { test4Room, testRoom } from "testMocks/room";

import PendingRoomBlock from "../PendingRoomBlock";
import React from "react";
import RoomAvatar from "../RoomAvatar";
import RoomTypeView from "../RoomTypeView";
import { shallow } from "enzyme";

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

  it("should render RoomTypeViewp imgs", () => {
    expect(
      shallow(
        <PendingRoomBlock room={testRoom} iHaveRoom={true} userId={1} />
      ).find(RoomAvatar)
    ).toHaveLength(testRoom.playersNumber);
  });

  it("should render RoomTypeView props", () => {
    const wrap = shallow(
      <PendingRoomBlock room={test4Room} iHaveRoom={true} userId={1} />
    )
      .find(RoomAvatar)
      .get(0).props;

    expect(wrap.avatar).toStrictEqual(test4Room.players[0]?.avatar);
    expect(wrap.name).toStrictEqual(test4Room.players[0]?.name);
    expect(wrap.roomId).toStrictEqual(test4Room.roomId);

    const wrap2 = shallow(
      <PendingRoomBlock room={test4Room} iHaveRoom={true} userId={1} />
    )
      .find(RoomAvatar)
      .get(2).props;

    expect(wrap2.avatar).toStrictEqual("");
    expect(wrap2.name).toStrictEqual("");
  });

  it("should render RoomTypeView removePlayer func", () => {
    const wrap = shallow(
      <PendingRoomBlock room={test4Room} iHaveRoom={true} userId={undefined} />
    )
      .find(RoomAvatar)
      .get(0).props;

    expect(wrap.removePlayer).toStrictEqual(null);

    const wrap1 = shallow(
      <PendingRoomBlock room={test4Room} iHaveRoom={true} userId={1} />
    )
      .find(RoomAvatar)
      .get(0).props;

    expect(typeof wrap1.removePlayer).toBe("function");
  });
});
