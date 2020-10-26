import { ShallowRendererProps, ShallowWrapper } from "enzyme";

import { FormControlLabel } from "@material-ui/core";
import QuickGameParams from "../QuickGameParams";
import React from "react";
import RoomSwitch from "../views/RoomSwitch";
import { createShallow } from "@material-ui/core/test-utils";
import { shallow } from "enzyme";

describe("Test quick geame params", () => {
  let shall: typeof shallow;

  beforeAll(() => {
    shall = createShallow();
  });

  afterAll(() => {
    // @ts-ignore
    shall.cleanUp();
  });

  it("should render", () => {
    expect(shall(<QuickGameParams isVip />)).toMatchSnapshot();
  });

  it("should render 3 switches", () => {
    expect(shall(<QuickGameParams isVip />).find(RoomSwitch)).toHaveLength(3);
  });

  it("should render 4 FormControlLabels", () => {
    expect(
      shall(<QuickGameParams isVip />).find(FormControlLabel)
    ).toHaveLength(4);
  });

  it("should render not vip", () => {
    shall(<QuickGameParams isVip={false} />)
      .find(FormControlLabel)
      .forEach((v) => expect(v.prop("disabled")).toBeTruthy());
  });
  it("should render  vip", () => {
    shall(<QuickGameParams isVip />)
      .find(FormControlLabel)
      .forEach((v) => expect(v.prop("disabled")).toBeFalsy());
  });
});
