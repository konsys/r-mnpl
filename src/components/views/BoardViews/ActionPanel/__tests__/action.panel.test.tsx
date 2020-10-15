import { mount, shallow } from "enzyme";

import { ActionPanel } from "../ActionPanel";
import React from "react";
import renderer from "react-test-renderer";

describe("A suite", function () {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ActionPanel text={"test"} disabled={false} onClick={() => null} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render without throwing an error", () => {
    expect(
      mount(
        <ActionPanel text={"test"} disabled={false} onClick={() => null} />
      ).contains("test")
    ).toBeTruthy();
  });

  it("should render without throwing an error", () => {
    expect(
      shallow(
        <ActionPanel
          text={"test2"}
          disabled={false}
          onClick={() => console.log(2323)}
        />
      ).contains("test2")
    ).toBeTruthy();
  });

  it("should render without throwing an error", () => {
    expect(
      shallow(
        <ActionPanel text={"test"} disabled={true} onClick={() => null} />
      ).hasClass("_locked")
    ).toBeTruthy();
  });

  it("should render without throwing an error", () => {
    expect(
      shallow(
        <ActionPanel text={"test"} disabled={false} onClick={() => null} />
      ).hasClass("_locked")
    ).toBeFalsy();
  });

  it("should render an action panel", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <ActionPanel text={"test"} disabled={false} onClick={() => onChange(1)} />
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.find("._action").simulate("click");
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should pass a selected value to the onChange handler", () => {
    const value = "2";
    const onChange = jest.fn();

    const wrapper = shallow(
      <ActionPanel text={"test"} disabled={false} onClick={onChange} />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find("div").simulate("click", value);

    expect(onChange).toBeCalledWith(value);
  });
});
