import { IField, IToken } from "../../../../types/types";

import { LINE_TRANSITION_TIMEOUT } from "../../../../utils/boardParams";
import React from "react";
import _ from "lodash";

export interface ITokenPosition {
  left: number;
  top: number;
}

export const getFieldLine = (
  fields: IField[],
  meanPosition: number
): number => {
  return (
    fields.find((v: IField) => v.fieldPosition === meanPosition)?.fieldLine || 0
  );
};

export const getTokensPositionOnTheSameField = (
  t: IToken[],
  userId: number,
  leftS: number,
  topS: number,
  line: number
): ITokenPosition => {
  let top = topS;
  let left = leftS;
  let topChange = 20;
  let leftChange = 20;
  const changeParam = 5;
  if (line === 0 || line === 2) {
    topChange += changeParam;
    leftChange -= changeParam;
  } else {
    topChange -= changeParam;
    leftChange += changeParam;
  }

  if (t.length > 1) {
    const index = t.findIndex((v) => v.userId === userId);
    if (index === 0) {
      top += topChange;
      left += leftChange;
    } else if (index === 1) {
      top -= topChange;
      left -= leftChange;
    } else if (index === 3) {
      top -= topChange;
      left += leftChange;
    } else if (index === 4) {
      top += topChange;
      left -= leftChange;
    }
  }

  return {
    left,
    top,
  };
};

export const Tokens = ({
  tokens,
  fields,
}: {
  tokens: IToken[];
  fields: IField[];
}) => {
  const group = (ar: any[]) => {
    return _(ar).groupBy("meanPosition").value();
  };

  const grouppedTokens = group(tokens);

  return (
    <>
      {tokens.map((v: IToken, k) => {
        const line = getFieldLine(fields, v.meanPosition);
        const s = grouppedTokens[v.meanPosition];
        const t = getTokensPositionOnTheSameField(
          s,
          v.userId,
          v.left,
          v.top,
          line
        );
        return (
          <div
            key={k}
            mnpl-jailed={v.jailed}
            style={{
              left: `${t.left}px`,
              top: `${t.top}px `,
              transitionDuration: `${LINE_TRANSITION_TIMEOUT}ms`,
              transitionProperty: "left top ease",
              transform: `scale(${s.length === 1 ? 1 : 0.75})`,
            }}
            className="_animated"
          />
        );
      })}
    </>
  );
};
