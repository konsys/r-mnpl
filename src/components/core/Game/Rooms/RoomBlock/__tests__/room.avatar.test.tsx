import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import RoomAvatar from "../RoomAvatar";
import { createImgPath } from "utils/fields.utils";
import { shallow } from "enzyme";

describe("Room block test", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render", () => {
    expect(
      shallow(
        <RoomAvatar
          avatar={"avatar"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      )
    ).toMatchSnapshot();
  });

  it("should render avatarWrap", () => {
    expect(
      shallow(
        <RoomAvatar
          avatar={""}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      ).find(".avatarWrap")
    ).toHaveLength(0);

    expect(
      shallow(
        <RoomAvatar
          avatar={"avatar"}
          name={""}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      ).find(".avatarWrap")
    ).toHaveLength(0);

    expect(
      shallow(
        <RoomAvatar
          avatar={"avatar"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      ).find(".avatarWrap")
    ).toHaveLength(1);
  });

  it("should render avatar img", () => {
    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatarSrc"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      ).find(".avatarWrap > img")
    ).toHaveLength(1);

    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatarSrc"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      )
        .find(".avatarWrap > img")
        .get(0).props.src
    ).toBe(createImgPath("testAvatarSrc"));

    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatarSrc"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      )
        .find(".avatarWrap > img")
        .get(0).props.alt
    ).toBe("testName");
  });

  it("should render HighlightOffIcon", () => {
    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatar"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={true}
        />
      ).find(HighlightOffIcon)
    ).toHaveLength(1);

    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatar"}
          name={""}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      ).find(HighlightOffIcon)
    ).toHaveLength(0);

    expect(
      shallow(
        <RoomAvatar
          avatar={""}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={null}
          roomId="testRoomId"
          isMe={true}
        />
      ).find(HighlightOffIcon)
    ).toHaveLength(0);

    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatar"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={true}
        />
      ).find(HighlightOffIcon)
    ).toHaveLength(1);

    const mockFn = jest.fn();

    shallow(
      <RoomAvatar
        avatar={"testAvatar"}
        name={"testName"}
        addPlayer={() => null}
        removePlayer={mockFn}
        roomId="testRoomId"
        isMe={true}
      />
    )
      .find(HighlightOffIcon)
      .simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("testRoomId");
  });

  it("should render AddIcon", () => {
    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatar"}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={true}
        />
      ).find(AddIcon)
    ).toHaveLength(0);

    expect(
      shallow(
        <RoomAvatar
          avatar={"testAvatar"}
          name={""}
          addPlayer={() => null}
          removePlayer={() => null}
          roomId="testRoomId"
          isMe={false}
        />
      ).find(AddIcon)
    ).toHaveLength(1);

    expect(
      shallow(
        <RoomAvatar
          avatar={""}
          name={"testName"}
          addPlayer={() => null}
          removePlayer={null}
          roomId="testRoomId"
          isMe={true}
        />
      ).find(AddIcon)
    ).toHaveLength(1);

    const mockFn = jest.fn();

    shallow(
      <RoomAvatar
        avatar={""}
        name={"testName"}
        addPlayer={mockFn}
        removePlayer={() => null}
        roomId="testRoomId"
        isMe={true}
      />
    )
      .find(AddIcon)
      .simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
