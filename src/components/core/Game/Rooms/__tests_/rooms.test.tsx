import * as modal from "stores/Game/Rooms/RoomsModalModel";

import { testRoom, testRoomsResponce } from "testMocks/room";

import { Button } from "@material-ui/core";
import CreateRoomModal from "../../CreateRoomModal/CreateRoomModal";
import React from "react";
import { Redirect } from "react-router-dom";
import { Rooms } from "../Rooms";
import Template from "components/views/Template/Template";
import { setRooms } from "stores/Game/Rooms/RoomsModel";
import { setUserEvent } from "stores/Game/User/UserModel";
import { shallow } from "enzyme";
import { testUser } from "testMocks/user";

describe("Room block test", () => {
  it("should render", () => {
    expect(shallow(<Rooms />)).toMatchSnapshot();
  });

  it("should render", () => {
    expect(shallow(<Rooms />).find(CreateRoomModal)).toHaveLength(1);
  });

  it("should show create room page", () => {
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
});