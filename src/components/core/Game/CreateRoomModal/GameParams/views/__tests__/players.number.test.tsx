import { Button } from "@material-ui/core";
import PlayersNumber from "../PlayersNumber";
import React from "react";
import { ShallowRendererProps } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";

describe("Players number test", () => {
  let shallow: ShallowRendererProps | any;

  beforeAll(() => {
    shallow = createShallow() as ShallowRendererProps;
  });

  afterAll(() => {
    shallow.cleanUp();
  });

  it("should render vip", () => {
    expect(shallow(<PlayersNumber isVip />)).toMatchSnapshot();
  });
  it("should render not vip", () => {
    expect(shallow(<PlayersNumber isVip={false} />)).toMatchSnapshot();
  });

  it("should render 5 buttons", () => {
    expect(shallow(<PlayersNumber isVip={false} />).find(Button)).toHaveLength(
      5
    );
  });

  it("should render right text on buttons", () => {
    const wrap = shallow(<PlayersNumber isVip={true} />);
    expect(wrap.find(Button).get(0).props.children).toBe("2");
    expect(wrap.find(Button).get(1).props.children).toBe("3");
    expect(wrap.find(Button).get(2).props.children).toBe("4");
    expect(wrap.find(Button).get(3).props.children).toBe("5");
    expect(wrap.find(Button).get(4).props.children).toBe("2x2");
  });

  it("should render vip", () => {
    expect(
      shallow(<PlayersNumber isVip={false} />)
        .find(Button)
        .get(4).props.disabled
    ).toBeTruthy();
    expect(
      shallow(<PlayersNumber isVip={true} />)
        .find(Button)
        .get(4).props.disabled
    ).toBeFalsy();
  });
});
