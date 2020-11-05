import BuyGallery from "components/core/Game/BuyGallery/BuyGallery";
import ContentBlock from "../ContentBlock";
import FriendsOnline from "components/views/GameVievs/LeftBlock/FriendsOnline";
import GameChat from "components/core/Game/GameChat/GameChat";
import React from "react";
import { TemplateModules } from "types/types";
import TopFive from "components/views/GameVievs/LeftBlock/TopFive";
import TwoColumnContent from "../TwoColumnContent";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(
      shallow(<TwoColumnContent children={[123456789]} />)
    ).toMatchSnapshot();
  });

  it("should render children", () => {
    expect(
      shallow(<TwoColumnContent children={[123456789]} />)
        .find(ContentBlock)
        .get(0).props.children
    ).toStrictEqual([123456789]);
  });

  it("should render FRIENDS_ONLINE", () => {
    expect(
      shallow(<TwoColumnContent modules={[]} />).find(FriendsOnline)
    ).toHaveLength(0);
    expect(
      shallow(
        <TwoColumnContent modules={[TemplateModules.FRIENDS_ONLINE]} />
      ).find(FriendsOnline)
    ).toHaveLength(1);
  });

  it("should render TOP_FIVE", () => {
    expect(
      shallow(<TwoColumnContent modules={[]} />).find(TopFive)
    ).toHaveLength(0);
    expect(
      shallow(<TwoColumnContent modules={[TemplateModules.TOP_FIVE]} />).find(
        TopFive
      )
    ).toHaveLength(1);
  });

  it("should render BuyGallery", () => {
    expect(
      shallow(<TwoColumnContent modules={[]} />).find(BuyGallery)
    ).toHaveLength(0);
    expect(
      shallow(
        <TwoColumnContent modules={[TemplateModules.BUY_GALLERY]} />
      ).find(BuyGallery)
    ).toHaveLength(1);
  });

  it("should render BuyGallery", () => {
    expect(
      shallow(<TwoColumnContent modules={[]} />).find(GameChat)
    ).toHaveLength(0);
    expect(
      shallow(<TwoColumnContent modules={[TemplateModules.GAME_CHAT]} />).find(
        GameChat
      )
    ).toHaveLength(1);
  });
});
