import * as history from "react-router-dom";

import { Button } from "@material-ui/core";
import React from "react";
import ToMainPageButton from "../ToMainPageButton";
import { shallow } from "enzyme";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Tokens test", () => {
  it("should render", () => {
    expect(shallow(<ToMainPageButton />)).toMatchSnapshot();
  });

  it("should render button", () => {
    expect(shallow(<ToMainPageButton />).find(Button)).toHaveLength(1);
  });

  it("should on click button", () => {
    shallow(<ToMainPageButton />)
      .find(Button)
      .simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });
});
