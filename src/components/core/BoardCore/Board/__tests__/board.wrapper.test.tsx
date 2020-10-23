import { BoardWrapper } from "../BoardWrapper";
import React from "react";
import { shallow } from "enzyme";
import { testRoom } from "testMocks/room";

describe("Board wrapper test", () => {
  it("should renders", () => {
    expect(shallow(<BoardWrapper board={testRoom} />)).toMatchSnapshot();
  });
});
