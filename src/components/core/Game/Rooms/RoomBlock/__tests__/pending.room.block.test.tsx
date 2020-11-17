import * as modal from "stores/Game/GameModal/GameModalModel";
import * as rooms from "stores/Game/Rooms/RoomsModel";

import { test4Room, testPlayingRoom } from "testMocks/room";

import PendingRoomBlock from "../PendingRoomBlock";
import React from "react";
import RoomAvatar from "../RoomAvatar";
import RoomTypeView from "../RoomTypeView";
import { shallow } from "enzyme";

describe("Room block test", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render", () => {
    expect(
      shallow(
        <PendingRoomBlock room={testPlayingRoom} iHaveRoom={true} userId={1} />
      )
    ).toMatchSnapshot();
  });

  it("should render RoomTypeView", () => {
    expect(
      shallow(
        <PendingRoomBlock room={testPlayingRoom} iHaveRoom={true} userId={1} />
      ).find(RoomTypeView)
    ).toHaveLength(1);
  });

  it("should render RoomTypeViewp imgs", () => {
    expect(
      shallow(
        <PendingRoomBlock room={testPlayingRoom} iHaveRoom={true} userId={1} />
      ).find(RoomAvatar)
    ).toHaveLength(testPlayingRoom.playersNumber);
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

  it("should render removePlayer func", () => {
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

  it("should render addPlayer props", () => {
    const modalMock = modal as any;
    const showModalMock = jest.spyOn(modalMock, "openGameModal");

    shallow(
      <PendingRoomBlock room={test4Room} iHaveRoom={false} userId={undefined} />
    )
      .find(RoomAvatar)
      .get(0)
      .props.addPlayer();

    expect(showModalMock).toHaveBeenCalledTimes(1);
    expect(showModalMock).toHaveBeenCalledWith({
      text: "Login to play",
      title: "You are not logged in",
    });
  });

  it("should render addPlayer props", () => {
    const modalMock = modal as any;
    const showModalMock = jest.spyOn(modalMock, "openGameModal");

    shallow(<PendingRoomBlock room={test4Room} iHaveRoom={true} userId={8} />)
      .find(RoomAvatar)
      .get(0)
      .props.addPlayer();

    expect(showModalMock).toHaveBeenCalledTimes(1);
    expect(showModalMock).toHaveBeenCalledWith({
      text: "You can`t join the room",
      title: "You are already waiting for game",
    });
  });

  it("should  addPlayer ", () => {
    const roomsMock = rooms as any;
    const addPlayerMock = jest.spyOn(roomsMock, "addPlayerToRoomFx");

    shallow(<PendingRoomBlock room={test4Room} iHaveRoom={false} userId={8} />)
      .find(RoomAvatar)
      .get(0)
      .props.addPlayer();

    expect(addPlayerMock).toHaveBeenCalledTimes(1);
    expect(addPlayerMock).toHaveBeenCalledWith({
      roomId: test4Room.roomId,
      userId: 8,
    });
  });
});
