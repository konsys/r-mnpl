import * as playerStore from "stores/Board/PlayersStore";

import { fieldAction$, setBoardFields } from "stores/Board/FieldsStore";
import { testPlayer1, testPlayer2, testUser } from "testMocks/user";

import { Avatar } from "../../Avatar/Avatar";
import { Players } from "../Players";
import React from "react";
import { openPlayerAction } from "stores/Board/PlayersStore";
import { shallow } from "enzyme";
import { testDoNothingAction } from "testMocks/action";
import { testPlayerAction } from "testMocks/player.action";

describe("Room top five test", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render", () => {
    expect(
      shallow(
        <Players
          players={[
            testPlayer1,
            { ...testPlayer2, userId: testDoNothingAction.event.action.userId },
          ]}
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

  it("should render all players", () => {
    expect(
      shallow(
        <Players players={[]} user={testUser} action={testDoNothingAction} />
      ).find(Avatar)
    ).toHaveLength(0);
  });
  it("should render all players", () => {
    expect(
      shallow(
        // @ts-ignore
        <Players players={[{}]} user={testUser} action={testDoNothingAction} />
      ).find(".table-body-players-card")
    ).toHaveLength(0);
  });
  it("should render all players", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1]}
          user={testUser}
          action={testDoNothingAction}
        />
      ).find(".table-body-players-card")
    ).toHaveLength(1);
  });

  it("should render monopoly action", () => {
    expect(
      // @ts-ignore
      shallow(<Players players={[testPlayer1]} user={testUser} action={{}} />)
        .find(".table-body-players-card")
        .get(0).props["mnpl-action_player"]
    ).toBe(0);
  });
  it("should render all players", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1]}
          user={testUser}
          // @ts-ignore
          action={{ action: null }}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-action_player"]
    ).toBe(0);
  });
  it("should render monopoly action", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1]}
          user={testUser}
          // @ts-ignore
          action={{ action: { event: null } }}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-action_player"]
    ).toBe(0);
  });
  it("should render monopoly action", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1]}
          user={testUser}
          // @ts-ignore
          action={{ action: { event: { action: null } } }}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-action_player"]
    ).toBe(0);
  });

  it("should render monopoly action", () => {
    expect(
      shallow(
        <Players
          players={[testPlayer1]}
          user={testUser}
          // @ts-ignore
          action={{ action: { event: { action: { userId: 42343646 } } } }}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-action_player"]
    ).toStrictEqual(0);
  });

  it("should render monopoly action", () => {
    expect(
      shallow(
        <Players
          players={[
            { ...testPlayer1, userId: testDoNothingAction.event.action.userId },
          ]}
          user={testUser}
          action={testDoNothingAction}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-action_player"]
    ).toBe(1);
  });

  it("should render monopoly action", () => {
    expect(
      shallow(
        <Players
          players={[{ ...testPlayer1, userId: 3453345345 }]}
          user={testUser}
          action={{
            ...testDoNothingAction,
            // @ts-ignore
            event: { action: { userId: 3453345345 } },
          }}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-action_player"]
    ).toBe(1);
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

  it("should render monopoly opened", () => {
    openPlayerAction({
      ...testPlayerAction,
      isVisible: true,
      toUserId: 2,
      fromUserId: 1,
    });

    expect(
      shallow(
        <Players
          players={[testPlayer2]}
          user={testUser}
          action={testDoNothingAction}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-opened"]
    ).toBe(0);
  });
  it("should render all players", () => {
    openPlayerAction({
      ...testPlayerAction,
      isVisible: true,
      toUserId: 1,
      fromUserId: 2,
    });

    expect(
      shallow(
        <Players
          players={[testPlayer2]}
          user={testUser}
          action={testDoNothingAction}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-opened"]
    ).toBe(1);
  });
  it("should render all players", () => {
    openPlayerAction({
      ...testPlayerAction,
      isVisible: false,
      toUserId: 1,
      fromUserId: 2,
    });

    expect(
      shallow(
        <Players
          players={[testPlayer2]}
          user={testUser}
          action={testDoNothingAction}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-opened"]
    ).toBe(0);
  });
  it("should render all players", () => {
    openPlayerAction({
      ...testPlayerAction,
      isVisible: true,
      toUserId: 1,
      fromUserId: 2,
    });

    expect(
      shallow(
        <Players
          players={[testPlayer2]}
          user={testUser}
          action={testDoNothingAction}
        />
      )
        .find(".table-body-players-card")
        .get(0).props["mnpl-opened"]
    ).toBe(1);
  });

  it("should close field action", () => {
    setBoardFields(1);
    let res = fieldAction$.getState();
    expect(res).toBe(1);
    shallow(
      <Players
        players={[testPlayer1]}
        user={testUser}
        action={testDoNothingAction}
      />
    )
      .find(".table-body-players-card")
      .get(0)
      .props.onClick();
    res = fieldAction$.getState();
    expect(res).toBe(0);
  });

  it("should call openPlayerAction", () => {
    const testFunc = jest.spyOn(playerStore, "openPlayerAction");
    shallow(
      <Players
        players={[testPlayer1]}
        user={testPlayer1}
        action={testDoNothingAction}
      />
    )
      .find(".table-body-players-card")
      .get(0)
      .props.onClick();

    expect(testFunc).toHaveBeenCalledTimes(1);
    expect(testFunc).toHaveBeenCalledWith({
      contract: false,
      creditPay: true,
      creditTake: true,
      fromUserId: 1,
      ignore: false,
      ignoreOff: false,
      isVisible: true,
      kick: false,
      leave: true,
      position: 1,
      profile: false,
      report: false,
      restart: true,
      toUserId: 1,
    });
  });

  const testFunc = jest.spyOn(playerStore, "openPlayerAction");
  shallow(
    <Players
      players={[testPlayer2]}
      user={{ ...testUser, userId: 10 }}
      action={testDoNothingAction}
    />
  )
    .find(".table-body-players-card")
    .get(0)
    .props.onClick();

  expect(testFunc).toHaveBeenCalledTimes(1);
  expect(testFunc).toHaveBeenCalledWith({
    contract: true,
    creditPay: false,
    creditTake: false,
    fromUserId: 10,
    ignore: true,
    ignoreOff: true,
    isVisible: true,
    kick: true,
    leave: false,
    position: 1,
    profile: true,
    report: true,
    restart: false,
    toUserId: 1,
  });

  it("should render Avatar with props", () => {
    const props = shallow(
      <Players
        players={[
          {
            ...testPlayer1,
            name: "testName",
            money: 230000,
            avatar: "testAvatar",
            vip: true,
          },
        ]}
        user={{
          ...testPlayer1,
          name: "testName",
          avatar: "testAvatar",
          vip: true,
        }}
        action={testDoNothingAction}
      />
    )
      .find(Avatar)
      .get(0).props;
    expect(props.name).toBe("testName");
    expect(props.money).toBe(230000);
    expect(props.avatar).toBe("testAvatar");
    expect(props.isVip).toBe(true);
    expect(props.remainTime).toBe(53);
  });
});
