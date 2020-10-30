import React from "react";
import RoomTypeView from "../RoomTypeView";
import { shallow } from "enzyme";
import { testRoom } from "testMocks/room";

describe("Room type view test", () => {
  it("should render", () => {
    expect(shallow(<RoomTypeView room={testRoom} />)).toMatchSnapshot();
  });
});
