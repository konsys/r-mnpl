import { Button } from "@material-ui/core";
import PlayersNumber from "../PlayersNumber";
import React from "react";
import { createShallow } from "@material-ui/core/test-utils";

describe("Players number test", () => {
  let shallow: any;

  beforeAll(() => {
    shallow = createShallow();
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
    console.log(shallow(<PlayersNumber isVip={false} />).debug());
    expect(shallow(<PlayersNumber isVip={false} />).find(Button)).toHaveLength(
      5
    );
  });
});
