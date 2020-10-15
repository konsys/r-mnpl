import { Avatar } from "../Avatar";
import { Params } from "../../../../../config/params";
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Test Avatar view", () => {
  const avatar = (
    <Avatar
      money={1}
      remainTime={2}
      isVip={false}
      avatar={"testAvatareSrc"}
      name={"Ivan"}
    />
  );
  it("renders correctly", () => {
    const tree = renderer.create(avatar).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows name", () => {
    expect(shallow(avatar).contains("Ivan")).toBeTruthy();
  });

  it("shows img src", () => {
    const wrapper = shallow(avatar);
    expect(
      wrapper.find(".table-body-players-card-body-avatar-background")
    ).toHaveLength(1);
  });
});
