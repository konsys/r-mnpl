import React from "react";
import RegularGameParams from "../RegularGameParams";
import RoomSwitch from "../views/RoomSwitch";
import { createShallow } from "@material-ui/core/test-utils";
import { shallow } from "enzyme";

describe("Test regular geame params", () => {
  let shall: typeof shallow;

  beforeAll(() => {
    shall = createShallow();
  });

  afterAll(() => {
    // @ts-ignore
    shall.cleanUp();
  });

  it("should render", () => {
    expect(shallow(<RegularGameParams isVip />)).toMatchSnapshot();
  });

  it("should render 2 switches", () => {
    expect(shall(<RegularGameParams isVip />).find(RoomSwitch)).toHaveLength(2);
  });

  it("should render RoomSwitch vip", () => {
    shall(<RegularGameParams isVip />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeFalsy());
  });

  it("should render RoomSwitch vip", () => {
    shall(<RegularGameParams isVip={false} />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeTruthy());
  });
});
