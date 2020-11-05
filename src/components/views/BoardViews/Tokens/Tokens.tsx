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
  field: IField
): ITokenPosition => {
  let top = topS;
  let left = leftS;
  let topChange = field.isJail || field.fieldPosition === 10 ? 9 : 20;
  let leftChange = field.isJail || field.fieldPosition === 10 ? 9 : 20;
  let changeParam = field.isJail || field.fieldPosition === 10 ? 0 : 5;

  if (field.fieldLine === 0 || field.fieldLine === 2) {
    topChange += changeParam;
    leftChange -= changeParam;
  } else {
    topChange -= changeParam;
    leftChange += changeParam;
  }

  //TODO jail field position for 3+ tokens and for fieldLine===null (corner fields)
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

export const groupTokensByMeanPosition = (ar: IToken[]) => {
  const res = _(ar).groupBy("meanPosition").value();
  return res;
};

export const Tokens = ({
  tokens,
  fields,
}: {
  tokens: IToken[];
  fields: IField[];
}) => {
  const grouppedTokens = groupTokensByMeanPosition(tokens);

  return (
    <>
      {tokens.map((v: IToken, k) => {
        const s = grouppedTokens[v.meanPosition];
        const t = getTokensPositionOnTheSameField(
          s,
          v.userId,
          v.left,
          v.top,
          fields.find((f) => f.fieldPosition === v.meanPosition) || fields[0]
        );
        return (
          <div
            key={k}
            mnpl-jailed={v.jailed}
            style={{
              left: `${t.left}px`,
              top: `${t.top}px`,
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
