import { testPlayer1, testUser } from "testMocks/user";

import { Players } from "../Players";
import React from "react";
import { shallow } from "enzyme";
import { testDoNothingAction } from "testMocks/action";

describe("Room top five test", () => {
  it("should render", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1]}
          user={testUser}
          action={testDoNothingAction}
        />
      )
    ).toMatchSnapshot();
  });
});
