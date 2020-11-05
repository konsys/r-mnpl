import FriendsOnline from "../FriendsOnline";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<FriendsOnline />)).toMatchSnapshot();
  });
});
