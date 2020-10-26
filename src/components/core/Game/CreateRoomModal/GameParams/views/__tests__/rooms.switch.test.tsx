import { Button, Switch } from "@material-ui/core";

import React from "react";
import RoomSwitch from "../RoomSwitch";
import { ShallowRendererProps } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";

describe("Rooms switch test", () => {
  let shallow: ShallowRendererProps | any;

  beforeAll(() => {
    shallow = createShallow() as ShallowRendererProps;
  });

  afterAll(() => {
    shallow.cleanUp();
  });

  it("should render ", () => {
    expect(
      shallow(
        <RoomSwitch
          text={"test"}
          name={"test"}
          checked={true}
          onChange={() => null}
          disabled={false}
        />
      )
    ).toMatchSnapshot();
  });

  it("should render true props", () => {
    const wrap = shallow(
      <RoomSwitch
        text={"testText"}
        name={"testName"}
        checked={false}
        onChange={() => null}
        disabled={false}
      />
    );
    expect(wrap.find(Switch).props("name").name).toStrictEqual("testName");
    expect(wrap.find(Switch).props("name").checked).toStrictEqual(false);
    expect(wrap.find(Switch).props("name").disabled).toStrictEqual(false);
  });

  it("should render false props", () => {
    const wrap = shallow(
      <RoomSwitch
        text={"testText"}
        name={"testName"}
        checked={true}
        onChange={() => null}
        disabled={true}
      />
    );
    expect(wrap.find(Switch).props("name").checked).toStrictEqual(true);
    expect(wrap.find(Switch).props("name").disabled).toStrictEqual(true);
  });
});
