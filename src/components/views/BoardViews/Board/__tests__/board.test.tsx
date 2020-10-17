import { BoardView } from "../BoardView";
import React from "react";
import { shallow } from "enzyme";

describe("Test board view", () => {
  it("renders correctly", () => {
    const tree = shallow(
      <BoardView
      // fields={[]}
      // fieldActionId={1}
      // contract={{
      //   fieldFromPrice: 2,
      //   fieldIdsFrom: [],
      //   fieldIdsTo: [],
      //   fieldToPrice: 1000,
      //   fromUserId: 1,
      //   moneyFrom: 1000,
      //   moneyTo: 1000,
      //   toUserId: 2,
      // }}
      // players={[]}
      // user={null}
      />
    );
    expect(tree).not.toMatchSnapshot();
  });
});
