import CreateRoomModal from "../../CreateRoomModal/CreateRoomModal";
import React from "react";
import { Rooms } from "../Rooms";
import { shallow } from "enzyme";

describe("Room block test", () => {
  it("should render", () => {
    expect(shallow(<Rooms />)).toMatchSnapshot();
  });

  it("should render", () => {
    expect(shallow(<Rooms />).find(CreateRoomModal)).toHaveLength(1);
  });
});
