import { FieldActionIT } from "../FieldActionIT";
import { GameLoading } from "../GameLoading";
import React from "react";
import { shallow } from "enzyme";

describe("Game loading test", () => {
  it("should render properly", () => {
    expect(shallow(<GameLoading isDisplayed />)).toMatchSnapshot();
  });
  it("should show", () => {
    expect(
      shallow(<GameLoading isDisplayed />).find(".table-loading-status")
    ).toHaveLength(1);
  });
  it("should hide", () => {
    expect(
      shallow(<GameLoading isDisplayed={false} />).find(".table-loading-status")
    ).toHaveLength(0);
  });
});
