import { mount, shallow } from "enzyme";

import { Dices } from "../Dices";
import { IncomeMessageType } from "types/types";
import React from "react";
import { dices$ } from "stores/Board/DicesStore";
import { showDices } from "stores/Board/DicesStore";

describe("Dices test", () => {
  beforeEach(() => {
    showDices({
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
    expect(
      shallow(<Dices />).find(".table-body-board-generators")
    ).toHaveLength(1);
  });
});
