import React from "react";
import RetroGameParams from "../RetroGameParams";
import RoomSwitch from "../views/RoomSwitch";
import { createShallow } from "@material-ui/core/test-utils";
import { shallow } from "enzyme";

describe("Test retro game params", () => {
  let shall: typeof shallow;

  beforeAll(() => {
    shall = createShallow();
  });

  afterAll(() => {
    // @ts-ignore
    shall.cleanUp();
  });

  it("should render", () => {
    expect(shallow(<RetroGameParams isVip />)).toMatchSnapshot();
  });

  it("should render 2 switches", () => {
    expect(shall(<RetroGameParams isVip />).find(RoomSwitch)).toHaveLength(2);
  });

  it("should render RoomSwitch vip", () => {
    shall(<RetroGameParams isVip />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeFalsy());
  });

  it("should render RoomSwitch vip", () => {
    shall(<RetroGameParams isVip={false} />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeTruthy());
  });
});
