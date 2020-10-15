import { Avatar } from "../Avatar";
import React from "react";
import renderer from "react-test-renderer";

describe("Test Avatar view", () => {
  it("renders correctly", () => {
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
    expect(tree).toMatchSnapshot();
  });
});
