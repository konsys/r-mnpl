import { mount, shallow } from "enzyme";

import { Dices } from "../Dices";
import { IncomeMessageType } from "types/types";
import React from "react";
import { dices$ } from "stores/Board/DicesStore";
import { setDicesEvent } from "stores/Board/DicesStore";

describe("Dices test", () => {
  beforeEach(() => {
    setDicesEvent({
      type: IncomeMessageType.DO_NOTHING,
      userId: 1,
      dices: [1, 1, 0],
      dicesSum: 2,
      _id: "",
      isModal: false,
    });
  });
  it("should render", () => {
    expect(shallow(<Dices />)).toMatchSnapshot();
  });

  it("should set propriate class", () => {
    const d1 = shallow(<Dices />).debug();
    console.log(3333, d1, dices$.getState());

    expect(shallow(<Dices />).find(".dicesWrapper")).toHaveLength(1);
  });
});
