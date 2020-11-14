import { shallow } from "enzyme";
import GameChatSocket from "socket/GameChatSocket";
import React from "react";

describe("Name of the group", () => {
  it("should render", () => {
    expect(shallow(<GameChatSocket />)).toMatchSnapshot();
  });
});
