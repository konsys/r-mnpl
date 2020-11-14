import { shallow } from "enzyme";
import RoomsSocket from "socket/RoomsSocket";
import React from "react";

describe("Name of the group", () => {
  it("should render", () => {
    expect(shallow(<RoomsSocket />)).toMatchSnapshot();
  });
});
