import {
  Tokens,
  getFieldLine,
  getTokensPositionOnTheSameField,
} from "../Tokens";
import { testAllFields, testField } from "testMocks/field";

import React from "react";
import { shallow } from "enzyme";
import { testToken } from "testMocks/tokens";

describe("Tokens test", () => {
  it("should render", () => {
    expect(
      shallow(<Tokens fields={testAllFields} tokens={[testToken]} />)
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
    let t = getTokensPositionOnTheSameField([testToken], 1, 10, 10);
    expect(t).toStrictEqual({ left: 10, top: 10 });

    // jailed: 0, left: 32, top: 35, meanPosition: 0, userId: 2

    // t: IToken[],
    // userId: number,
    // line: number,
    // leftS: number,
    // topS: number

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      1,
      55,
      55
    );
    expect(t).toStrictEqual({ left: 70, top: 70 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      2,
      55,
      55
    );
    expect(t).toStrictEqual({ left: 40, top: 40 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
      ],
      3,
      55,
      55
    );
    expect(t).toStrictEqual({ left: 55, top: 55 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
        { ...testToken, userId: 4 },
      ],
      4,
      70,
      40
    );
    expect(t).toStrictEqual({ left: 55, top: 55 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
        { ...testToken, userId: 4 },
        { ...testToken, userId: 5 },
      ],
      5,
      40,
      70
    );
    expect(t).toStrictEqual({ left: 55, top: 55 });
  });
});
