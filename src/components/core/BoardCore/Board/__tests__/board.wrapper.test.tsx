import { BoardWrapper } from "../BoardWrapper";
import React from "react";
import { shallow } from "enzyme";
import { testPlayingRoom } from "testMocks/room";

describe("Board wrapper test", () => {
  it("should renders", () => {
    expect(shallow(<BoardWrapper board={testPlayingRoom} />)).toMatchSnapshot();
  });
});
