import { PlayerActions } from "../PlayerActions";
import React from "react";
import { shallow } from "enzyme";

describe("Room top five test", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render", () => {
    expect(
      shallow(
        <PlayerActions
          profile={true}
          ignore={true}
          ignoreOff={true}
          report={true}
          restart={true}
          creditTake={true}
          creditPay={true}
          leave={true}
          contract={true}
          kick={true}
          fromUserId={1}
          toUserId={2}
          position={1}
          isVisible={true}
        />
      )
    ).toMatchSnapshot();
  });
});
