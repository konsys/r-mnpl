import React from "react";
import RoomSwitch from "../views/RoomSwitch";
import ShuffleGameParams from "../ShuffleGameParams";
import { createShallow } from "@material-ui/core/test-utils";
import { shallow } from "enzyme";

describe("Test shuffle geame params", () => {
  let shall: typeof shallow;

  beforeAll(() => {
    shall = createShallow();
  });

  afterAll(() => {
    // @ts-ignore
    shall.cleanUp();
  });

  it("should render", () => {
    expect(shallow(<ShuffleGameParams isVip />)).toMatchSnapshot();
  });

  it("should render 2 switches", () => {
    expect(shall(<ShuffleGameParams isVip />).find(RoomSwitch)).toHaveLength(2);
  });

  it("should render RoomSwitch vip", () => {
    shall(<ShuffleGameParams isVip />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeFalsy());
  });

  it("should render RoomSwitch vip", () => {
    shall(<ShuffleGameParams isVip={false} />)
      .find(RoomSwitch)
      .forEach((v) => expect(v.prop("disabled")).toBeTruthy());
  });
});
