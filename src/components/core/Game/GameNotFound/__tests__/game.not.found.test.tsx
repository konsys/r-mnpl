import GameNotFound from "../GameNotFound";
import React from "react";
import { Typography } from "@material-ui/core";
import { shallow } from "enzyme";

describe("Buy gallery test", () => {
  it("should render undefined", () => {
    expect(shallow(<GameNotFound text={"testText"} />)).toMatchSnapshot();
  });

  it("should show text", () => {
    expect(
      shallow(<GameNotFound text={"testText"} />)
        .find(Typography)
        .text()
    ).toBe("GNotFound testText");
  });
});
