import * as modal from "stores/Game/Rooms/RoomsModalModel";

import { myPendingRoom$, setRooms } from "stores/Game/Rooms/RoomsModel";
import { setUserEvent, user$ } from "stores/Game/User/UserModel";
import { test5User, testUser } from "testMocks/user";
import {
  testPendingRoomsResponce,
  testRoom,
  testRoomsResponce,
} from "testMocks/room";

import { Button } from "@material-ui/core";
import CreateRoomModal from "../../CreateRoomModal/CreateRoomModal";
import React from "react";
import { Redirect } from "react-router-dom";
import RoomBlock from "../RoomBlock/RoomBlock";
import { Rooms } from "../Rooms";
import Template from "components/views/Template/Template";
import { shallow } from "enzyme";

describe("Room block test", () => {
  it("should render", () => {
    expect(shallow(<Rooms />)).toMatchSnapshot();
  });

  it("should render", () => {
    expect(shallow(<Rooms />).find(CreateRoomModal)).toHaveLength(1);
  });

  it("should show create room page", () => {
    setUserEvent(test5User);
    expect(shallow(<Rooms />).find(Template)).toHaveLength(1);
  });

  it("should redirect", () => {
    setUserEvent(testUser);
    setRooms(testRoomsResponce);

    expect(shallow(<Rooms />).find(Redirect)).toHaveLength(1);
    expect(
      shallow(<Rooms />)
        .find(Redirect)
        .get(0).props.to
    ).toStrictEqual({ pathname: `/board/${testRoom.roomId}` });
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
    setUserEvent(testUser);

    const wrap = shallow(<Rooms />);

    expect(wrap.find(Redirect)).toHaveLength(0);
    expect(wrap.find(RoomBlock)).toHaveLength(
      testPendingRoomsResponce.rooms.length
    );

    expect(wrap.find(RoomBlock).get(0).props.room).toStrictEqual(
      testPendingRoomsResponce.rooms[0]
    );
    expect(wrap.find(RoomBlock).get(0).props.iHaveRoom).toStrictEqual(true);

    setRooms(testPendingRoomsResponce);
    setUserEvent(test5User);

    expect(
      shallow(<Rooms />)
        .find(RoomBlock)
        .get(0).props.iHaveRoom
    ).toStrictEqual(false);

    setRooms(testPendingRoomsResponce);
    setUserEvent(testUser);
    expect(
      shallow(<Rooms />)
        .find(RoomBlock)
        .get(0).props.iHaveRoom
    ).toStrictEqual(true);
  });

  it("should send userId in props", () => {
    setUserEvent(test5User);
    expect(
      shallow(<Rooms />)
        .find(RoomBlock)
        .get(0).props.userId
    ).toBe(test5User.userId);

    setUserEvent(testUser);
    expect(
      shallow(<Rooms />)
        .find(RoomBlock)
        .get(0).props.userId
    ).toBe(testUser.userId);

    setUserEvent(null);
    expect(
      shallow(<Rooms />)
        .find(RoomBlock)
        .get(0).props.userId
    ).toBe(null);
  });
});
