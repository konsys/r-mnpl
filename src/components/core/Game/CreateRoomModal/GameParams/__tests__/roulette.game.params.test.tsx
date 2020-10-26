import React from "react";
import RoomSwitch from "../views/RoomSwitch";
import RouletteGameParams from "../RouletteGameParams";
import { createShallow } from "@material-ui/core/test-utils";
import { shallow } from "enzyme";

describe("Test roulette geame params", () => {
  let shall: typeof shallow;

  beforeAll(() => {
    shall = createShallow();
  });

  afterAll(() => {
    // @ts-ignore
    shall.cleanUp();
  });

  it("should render", () => {
    expect(shallow(<RouletteGameParams isVip />)).toMatchSnapshot();
  });

  it("should render 2 switches", () => {
    expect(shall(<RouletteGameParams isVip />).find(RoomSwitch)).toHaveLength(
      2
    );
  });

  it("should render RoomSwitch vip", () => {
    shall(<RouletteGameParams isVip />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeFalsy());
  });

  it("should render RoomSwitch vip", () => {
    shall(<RouletteGameParams isVip={false} />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeTruthy());
  });
});
