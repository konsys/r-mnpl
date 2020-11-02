import { Tokens, getFieldLine, getTokenPosition } from "../Tokens";

import React from "react";
import { shallow } from "enzyme";
import { testField } from "testMocks/field";
import { testToken } from "testMocks/tokens";

describe("Tokens test", () => {
  it("should render", () => {
    expect(
      shallow(<Tokens fields={[testField]} tokens={[testToken]} />)
    ).toMatchSnapshot();
  });

  it("should test field line", () => {
    let t = getFieldLine([testField], 1);
    expect(t).toBe(0);

    t = getFieldLine([{ ...testField, fieldPosition: 16, fieldLine: 11 }], 16);
    expect(t).toBe(11);

    t = getFieldLine([{ ...testField, fieldPosition: 11, fieldLine: 11 }], 16);
    expect(t).toBe(0);
  });

  it("should test token position", () => {
    let t = getTokenPosition([testToken], 1, 1, 10, 10);
    expect(t).toStrictEqual({ left: 10, top: 10 });

    t = getTokenPosition(
      [testToken, { ...testToken, userId: 2 }],
      1,
      1,
      10,
      10
    );
    expect(t).toStrictEqual({ left: 10, top: 10 });
  });
});
