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

  it("shouldtest first line test", () => {
    let t = getTokensPositionOnTheSameField([testToken], 1, 10, 10, {...testField};
    expect(t).toStrictEqual({ left: 10, top: 10 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      1,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 + 15, top: 20 + 25 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      2,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 - 15, top: 20 - 25 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
      ],
      3,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20, top: 20 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
        { ...testToken, userId: 4 },
      ],
      4,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 + 15, top: 20 - 25 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
        { ...testToken, userId: 4 },
        { ...testToken, userId: 5 },
      ],
      5,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 - 15, top: 20 + 25 });
  });

  it("shouldtest second line test", () => {
    let t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      1,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 + 25, top: 20 + 15 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      2,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 - 25, top: 20 - 15 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
      ],
      3,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20, top: 20 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
        { ...testToken, userId: 4 },
      ],
      4,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 + 25, top: 20 - 15 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
        { ...testToken, userId: 3 },
        { ...testToken, userId: 4 },
        { ...testToken, userId: 5 },
      ],
      5,
      20,
      20,
      {...testField}
    );
    expect(t).toStrictEqual({ left: 20 - 25, top: 20 + 15 });
  });
});
