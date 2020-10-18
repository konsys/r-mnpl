import { BoardView } from "../BoardView";
import React from "react";
import { shallow } from "enzyme";

describe("Test board view", () => {
  it("renders correctly", () => {
    shallow(
      <BoardView
        fields={[]}
        fieldActionId={1}
        contract={{
          fromUserId: 1,
          toUserId: 1,
          fieldFromPrice: 1000,
          fieldIdsFrom: [],
          fieldIdsTo: [],
          fieldToPrice: 1000,
          moneyFrom: 1000,
          moneyTo: 1000,
        }}
        user={null}
        players={[]}
      />
    );
  });
});
