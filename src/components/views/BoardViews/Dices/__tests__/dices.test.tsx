import * as dices from "stores/Board/DicesStore";

import { mount, shallow } from "enzyme";

import { Dices } from "../Dices";
import React from "react";

// jest.mock("stores/Board/DicesStore", () => ({
//   hideDicesEvent: jest.fn(),
// }));

describe("Dices test", () => {
  it("should render", () => {
    mount(<Dices />);
    // expect(dices.hideDicesEvent).toHaveBeenCalledTimes(1);f
  });
});
