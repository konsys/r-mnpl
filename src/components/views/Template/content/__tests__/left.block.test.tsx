import { CardContent } from "@material-ui/core";
import LeftBlock from "../LeftBlock";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<LeftBlock children={123456789} />)).toMatchSnapshot();
  });

  it("should render children", () => {
    expect(
      shallow(<LeftBlock children={123456789} />)
        .find(CardContent)
        .get(0).props.children
    ).toBe(123456789);
  });
});
