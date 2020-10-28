import GameModal from "../GameModal";
import React from "react";
import { shallow } from "enzyme";

describe("Buy gallery test", () => {
  it("should render undefined", () => {
    expect(shallow(<GameModal />)).toMatchSnapshot();
  });

  //   it("should render winner name", () => {
  //     expect(
  //       shallow(<GameModal  />)
  //         .find("._winner")
  //         .text()
  //     ).toBe(`Победитель ${testRoomUser.name}`);
  //   });
});
