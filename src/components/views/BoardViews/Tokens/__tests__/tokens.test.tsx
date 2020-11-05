import {
  Tokens,
  getFieldLine,
  getTokensPositionOnTheSameField,
  groupTokensByMeanPosition,
} from "../Tokens";
import { testAllFields, testField } from "testMocks/field";

import { LINE_TRANSITION_TIMEOUT } from "utils/boardParams";
import React from "react";
import { shallow } from "enzyme";
import { testToken } from "testMocks/tokens";

describe("Tokens test", () => {
  it("should render", () => {
    expect(
      shallow(<Tokens fields={testAllFields} tokens={[testToken]} />)
    ).toMatchSnapshot();
  });

  it("should show tokens", () => {
    let wrap = shallow(<Tokens fields={testAllFields} tokens={[]} />);
    expect(wrap.find("div")).toHaveLength(0);
    wrap = shallow(<Tokens fields={testAllFields} tokens={[testToken]} />);
    expect(wrap.find("div")).toHaveLength(1);
  });

  it("should show token props", () => {
    const token = { ...testToken, jailed: 1135, left: 120, top: 120 };
    let props = shallow(<Tokens fields={testAllFields} tokens={[token]} />)
      .find("div")
      .get(0).props;
    const position = getTokensPositionOnTheSameField(
      [token],
      token.userId,
      token.left,
      token.top,
      testField
    );

    expect(props["mnpl-jailed"]).toBe(1135);
    expect(props.style).toHaveProperty("left", `${position.left}px`);
    expect(props.style).toHaveProperty("top", `${position.top}px`);
    expect(props.style).toHaveProperty(
      "transitionDuration",
      `${LINE_TRANSITION_TIMEOUT}ms`
    );
  });

  it("should test token scale", () => {
    const token = { ...testToken };
    let props = shallow(<Tokens fields={testAllFields} tokens={[token]} />)
      .find("div")
      .get(0).props;

    expect(props.style).toHaveProperty("transform", `scale(1)`);
    props = shallow(<Tokens fields={testAllFields} tokens={[token, token]} />)
      .find("div")
      .get(0).props;

    expect(props.style).toHaveProperty("transform", `scale(0.75)`);
  });

  it("should test field line", () => {
    let t = getFieldLine([testField], 1);
    expect(t).toBe(0);

    t = getFieldLine([{ ...testField, fieldPosition: 16, fieldLine: 11 }], 16);
    expect(t).toBe(11);

    t = getFieldLine([{ ...testField, fieldPosition: 11, fieldLine: 11 }], 16);
    expect(t).toBe(0);
  });

  it("should test zero line test", () => {
    let t = getTokensPositionOnTheSameField([testToken], 1, 10, 10, {
      ...testField,
    });
    expect(t).toStrictEqual({ left: 10, top: 10 });

    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      1,
      20,
      20,
      { ...testField, fieldLine: 0 }
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
      { ...testField }
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
      { ...testField, fieldLine: 0 }
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
      { ...testField, fieldLine: 0 }
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
      { ...testField, fieldLine: 0 }
    );
    expect(t).toStrictEqual({ left: 20 - 15, top: 20 + 25 });
  });

  it("should test line one test", () => {
    let t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      1,
      20,
      20,
      { ...testField, fieldLine: 1 }
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
      { ...testField, fieldLine: 1 }
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
      { ...testField, fieldLine: 1 }
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
      { ...testField, fieldLine: 1 }
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
      { ...testField, fieldLine: 1 }
    );

    expect(t).toStrictEqual({ left: 20 - 25, top: 20 + 15 });
  });

  it("tests position on jail field", () => {
    let t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      1,
      20,
      20,
      { ...testField, fieldPosition: 10 }
    );
    expect(t).toStrictEqual({ left: 20 + 9, top: 20 + 9 });
    t = getTokensPositionOnTheSameField(
      [
        { ...testToken, userId: 1 },
        { ...testToken, userId: 2 },
      ],
      2,
      20,
      20,
      { ...testField, fieldPosition: 10 }
    );
    expect(t).toStrictEqual({ left: 20 - 9, top: 20 - 9 });
  });

  it("should group tokens on one field", () => {
    const group = groupTokensByMeanPosition([
      // @ts-ignore
      { userId: 1, meanPosition: 1 },
      // @ts-ignore
      { userId: 2, meanPosition: 2 },
      // @ts-ignore
      { userId: 3, meanPosition: 3 },
      // @ts-ignore
      { userId: 4, meanPosition: 4 },
      // @ts-ignore
      { userId: 5, meanPosition: 5 },
    ]);
    expect(group).toStrictEqual({
      "1": [{ meanPosition: 1, userId: 1 }],
      "2": [{ meanPosition: 2, userId: 2 }],
      "3": [{ meanPosition: 3, userId: 3 }],
      "4": [{ meanPosition: 4, userId: 4 }],
      "5": [{ meanPosition: 5, userId: 5 }],
    });
  });

  it("should group two tokens on field", () => {
    const group = groupTokensByMeanPosition([
      // @ts-ignore
      { userId: 1, meanPosition: 1 },
      // @ts-ignore
      { userId: 2, meanPosition: 1 },
      // @ts-ignore
      { userId: 3, meanPosition: 2 },
      // @ts-ignore
      { userId: 4, meanPosition: 2 },
      // @ts-ignore
      { userId: 5, meanPosition: 3 },
    ]);
    expect(group).toStrictEqual({
      "1": [
        { meanPosition: 1, userId: 1 },
        { meanPosition: 1, userId: 2 },
      ],
      "2": [
        { meanPosition: 2, userId: 3 },
        { meanPosition: 2, userId: 4 },
      ],
      "3": [{ meanPosition: 3, userId: 5 }],
    });
  });

  it("should group free tokens on field", () => {
    const group = groupTokensByMeanPosition([
      // @ts-ignore
      { userId: 1, meanPosition: 1 },
      // @ts-ignore
      { userId: 2, meanPosition: 1 },
      // @ts-ignore
      { userId: 3, meanPosition: 1 },
      // @ts-ignore
      { userId: 4, meanPosition: 2 },
      // @ts-ignore
      { userId: 5, meanPosition: 2 },
    ]);
    expect(group).toStrictEqual({
      "1": [
        { meanPosition: 1, userId: 1 },
        { meanPosition: 1, userId: 2 },
        { meanPosition: 1, userId: 3 },
      ],
      "2": [
        { meanPosition: 2, userId: 4 },
        { meanPosition: 2, userId: 5 },
      ],
    });
  });
  it("should group four tokens on field", () => {
    const group = groupTokensByMeanPosition([
      // @ts-ignore
      { userId: 1, meanPosition: 1 },
      // @ts-ignore
      { userId: 2, meanPosition: 1 },
      // @ts-ignore
      { userId: 3, meanPosition: 1 },
      // @ts-ignore
      { userId: 4, meanPosition: 1 },
      // @ts-ignore
      { userId: 5, meanPosition: 2 },
    ]);
    expect(group).toStrictEqual({
      "1": [
        { meanPosition: 1, userId: 1 },
        { meanPosition: 1, userId: 2 },
        { meanPosition: 1, userId: 3 },
        { meanPosition: 1, userId: 4 },
      ],
      "2": [{ meanPosition: 2, userId: 5 }],
    });
  });
  it("should group five tokens on field", () => {
    const group = groupTokensByMeanPosition([
      // @ts-ignore
      { userId: 1, meanPosition: 1 },
      // @ts-ignore
      { userId: 2, meanPosition: 1 },
      // @ts-ignore
      { userId: 3, meanPosition: 1 },
      // @ts-ignore
      { userId: 4, meanPosition: 1 },
      // @ts-ignore
      { userId: 5, meanPosition: 1 },
    ]);
    expect(group).toStrictEqual({
      "1": [
        { meanPosition: 1, userId: 1 },
        { meanPosition: 1, userId: 2 },
        { meanPosition: 1, userId: 3 },
        { meanPosition: 1, userId: 4 },
        { meanPosition: 1, userId: 5 },
      ],
    });
  });
});
