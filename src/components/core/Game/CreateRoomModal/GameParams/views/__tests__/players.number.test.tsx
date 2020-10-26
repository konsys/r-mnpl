import PlayersNumber from "../PlayersNumber";
import React from "react";
import { shallow } from "enzyme";

describe("Players number test", () => {
  it("should render vip", () => {
    expect(shallow(<PlayersNumber isVip />)).toMatchSnapshot();
  });
  it("should render not vip", () => {
    expect(shallow(<PlayersNumber isVip={false} />)).toMatchSnapshot();
  });
});
