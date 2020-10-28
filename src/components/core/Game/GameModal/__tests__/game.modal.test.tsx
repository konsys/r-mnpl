import * as modal from "stores/Game/GameModal/GameModalModel";

import { Button, Grid, Typography } from "@material-ui/core";

import GameModal from "../GameModal";
import React from "react";
import { openGameModal } from "stores/Game/GameModal/GameModalModel";
import { shallow } from "enzyme";

describe("Buy gallery test", () => {
  beforeEach(() => {
    openGameModal({
      title: "testTitle",
      text: "testText",
    });
  });
  it("should render undefined", () => {
    expect(shallow(<GameModal />)).toMatchSnapshot();
  });

  it("should render 4 grids", () => {
    expect(shallow(<GameModal />).find(Grid)).toHaveLength(4);
  });

  it("should title", () => {
    expect(shallow(<GameModal />).find(Grid)).toHaveLength(4);
  });

  it("should show title", () => {
    expect(
      shallow(<GameModal />)
        .find(Typography)
        .get(0).props.children
    ).toBe("testTitle");
  });

  it("should show text", () => {
    expect(
      shallow(<GameModal />)
        .find(Typography)
        .get(1).props.children
    ).toBe("testText");
  });

  it("should close modal", () => {
    const deleteMock = jest.spyOn(modal, "closeGameModal");

    shallow(<GameModal />)
      .find(Button)
      .simulate("click");

    expect(deleteMock).toHaveBeenCalledTimes(1);
  });
});
