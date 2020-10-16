import { Avatar } from "../Avatar";
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Test Avatar view", () => {
  const avatar = (
    <Avatar
      money={999889}
      remainTime={38}
      isVip={true}
      avatar={"testAvatareSrc"}
      name={"Ivan"}
    />
  );
  const notVipAvatar = (
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

  it("shows money", () => {
    expect(shallow(avatar).contains(999889)).toBeTruthy();
  });

  it("shows remainTime", () => {
    expect(shallow(avatar).contains(38)).toBeTruthy();
  });

  it("tests vip div", () => {
    const tree = renderer
      .create(
        <Avatar
          money={1}
          remainTime={2}
          isVip={false}
          avatar={"testAvatareSrc"}
          name={"Ivan"}
        />
      )
      .toJSON();

    expect(shallow(avatar).find("._vip")).toHaveLength(1);
    expect(shallow(notVipAvatar).find("._vip")).toHaveLength(0);
  });
});
