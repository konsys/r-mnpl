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
        <Players players={[]} user={testUser} action={testDoNothingAction} />
      ).find(Avatar)
    ).toHaveLength(0);
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

  it("should render all players", () => {
    expect(
      shallow(
        <Players players={[]} user={testUser} action={testDoNothingAction} />
      ).find(Avatar)
    ).toHaveLength(0);
    expect(
      shallow(
        <Players players={[{}]} user={testUser} action={testDoNothingAction} />
      ).find(".table-body-players-card")
    ).toHaveLength(0);
    expect(
      shallow(
        <Players
          players={[testUser]}
          user={testUser}
          action={testDoNothingAction}
        />
      ).find(".table-body-players-card")
    ).toHaveLength(1);
  });

  it("should have all properties", () => {
    const props = shallow(
      <Players
        players={[testPlayer1]}
        user={testUser}
        action={testDoNothingAction}
      />
    )
      .find(".table-body-players-card")
      .get(0).props;
    expect(props.id).toBe(`player_card_${testPlayer1.userId}`);
    expect(props["mnpl-order"]).toBe(testPlayer1.moveOrder);
    expect(props["mnpl-team"]).toBe(testPlayer1.team);
  });

  //   it("should render action player", () => {
  //     const props = shallow(
  //       <Players
  //         players={[undefined]}
  //         user={testUser}
  //         action={testDoNothingAction}
  //       />
  //     )
  //       .find(".table-body-players-card")
  //       .get(0).props;
  //     expect(props["mnpl-action_player"]).toBe(1);
  //   });
});
