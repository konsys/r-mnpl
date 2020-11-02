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
  topS: number
): ITokenPosition => {
  let top = topS;
  let left = leftS;

  if (t.length > 1) {
    const index = t.findIndex((v) => v.userId === userId);
    if (index === 0) {
      top += 15;
      left += 15;
    } else if (index === 1) {
      top -= 15;
      left -= 15;
    } else if (index === 3) {
      top += 15;
      left -= 15;
    } else if (index === 4) {
      top -= 15;
      left += 15;
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
        const s = grouppedTokens[v.meanPosition];
        const t = getTokensPositionOnTheSameField(s, v.userId, v.left, v.top);
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
