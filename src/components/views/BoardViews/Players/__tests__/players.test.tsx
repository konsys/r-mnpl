import { testPlayer1, testPlayer2, testUser } from "testMocks/user";

import { Avatar } from "../../Avatar/Avatar";
import { Players } from "../Players";
import React from "react";
import { shallow } from "enzyme";
import { testDoNothingAction } from "testMocks/action";

describe("Room top five test", () => {
  it("should render", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1, testPlayer2]}
          user={testUser}
          action={testDoNothingAction}
        />
      )
    ).toMatchSnapshot();
  });

  it("should render all players", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1, testPlayer2]}
          user={testUser}
          action={testDoNothingAction}
        />
      ).find(Avatar)
    ).toHaveLength(2);
  });
});
