import GameCompleted from "../GameCompleted";
import React from "react";
import { shallow } from "enzyme";
import { testRoomUser } from "testMocks/user";

describe("Buy gallery test", () => {
  it("should render undefined", () => {
    expect(shallow(<GameCompleted winner={undefined} />)).toMatchSnapshot();
  });
  it("should render winner", () => {
    expect(shallow(<GameCompleted winner={testRoomUser} />)).toMatchSnapshot();
  });

  it("should render winner name", () => {
    expect(
      shallow(<GameCompleted winner={testRoomUser} />)
        .find("._winner")
        .text()
    ).toBe(`Победитель ${testRoomUser.name}`);
  });
});
