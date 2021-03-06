import * as modal from "stores/Game/Rooms/RoomsModalModel";

import { test5User, testUser } from "testMocks/user";
import {
  testPendingRoomsResponce,
  testPlayingRoom,
  testRoomsResponce,
} from "testMocks/room";

import { Button } from "@material-ui/core";
import CreateRoomModal from "../../CreateRoomModal/CreateRoomModal";
import PendingRoomBlock from "../RoomBlock/WaitingRoomsBlock";
import React from "react";
import { Redirect } from "react-router-dom";
import { Rooms } from "../Rooms";
import Template from "components/views/Template/Template";
import { setRooms } from "stores/Game/Rooms/RoomsModel";
import { setUser } from "stores/Game/User/UserModel";
import { shallow } from "enzyme";

describe("Room block test", () => {
  it("should render", () => {
    expect(shallow(<Rooms />)).toMatchSnapshot();
  });

  it("should render", () => {
    expect(shallow(<Rooms />).find(CreateRoomModal)).toHaveLength(1);
  });

  it("should show create room page", () => {
    setUser(test5User);
    expect(shallow(<Rooms />).find(Template)).toHaveLength(1);
  });

  it("should redirect", () => {
    setUser(testUser);
    setRooms(testRoomsResponce);

    expect(shallow(<Rooms />).find(Redirect)).toHaveLength(1);
    expect(
      shallow(<Rooms />)
        .find(Redirect)
        .get(0).props.to
    ).toStrictEqual({ pathname: `/board/${testPlayingRoom.roomId}` });
  });

  it("should show create room page", () => {
    setRooms({
      playersInRooms: 0,
      rooms: [],
    });
    const testMock = modal as any;
    jest.spyOn(testMock, "openRoomModal");
    expect(shallow(<Rooms />).find(Template)).toHaveLength(1);
    expect(shallow(<Rooms />).find(Button)).toHaveLength(1);
    shallow(<Rooms />)
      .find(Button)
      .simulate("click");
    expect(testMock.openRoomModal).toHaveBeenCalledTimes(1);
  });

  it("should disable button when I have room", () => {
    setRooms(testPendingRoomsResponce);
    setUser(testUser);

    const wrap = shallow(<Rooms />);

    expect(wrap.find(Redirect)).toHaveLength(0);
    expect(wrap.find(PendingRoomBlock)).toHaveLength(
      testPendingRoomsResponce.rooms.length
    );

    expect(wrap.find(PendingRoomBlock).get(0).props.room).toStrictEqual(
      testPendingRoomsResponce.rooms[0]
    );
    expect(wrap.find(PendingRoomBlock).get(0).props.iHaveRoom).toStrictEqual(
      true
    );

    setRooms(testPendingRoomsResponce);
    setUser(test5User);

    expect(
      shallow(<Rooms />)
        .find(PendingRoomBlock)
        .get(0).props.iHaveRoom
    ).toStrictEqual(false);

    setRooms(testPendingRoomsResponce);
    setUser(testUser);
    expect(
      shallow(<Rooms />)
        .find(PendingRoomBlock)
        .get(0).props.iHaveRoom
    ).toStrictEqual(true);
  });

  it("should send userId in props", () => {
    setUser(test5User);
    expect(
      shallow(<Rooms />)
        .find(PendingRoomBlock)
        .get(0).props.userId
    ).toBe(test5User.userId);

    setUser(testUser);
    expect(
      shallow(<Rooms />)
        .find(PendingRoomBlock)
        .get(0).props.userId
    ).toBe(testUser.userId);

    setUser(null);
    expect(
      shallow(<Rooms />)
        .find(PendingRoomBlock)
        .get(0).props.userId
    ).toBeUndefined();
  });
});
