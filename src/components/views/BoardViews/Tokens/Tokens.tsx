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

export const getTokenPosition = (
  t: IToken[],
  userId: number,
  line: number,
  leftS: number,
  topS: number
): ITokenPosition => {
  let top = topS;
  let left = leftS;
  const index = t.findIndex((v) => v.userId === userId) + 1;
  if (t.length > 1) {
    if (line === 0 || line === 2) {
      top = topS - t.length * 11 + 1 + 18 * index;

      if (index % 2 === 0) {
        left += 10;
      } else {
        left -= 10;
      }
    }

    if (line === 1 || line === 3) {
      left = leftS - t.length * 11 + 1 + 18 * index;

      if (index % 2 === 0) {
        top += 10;
      } else {
        top -= 10;
      }
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
        const t = getTokenPosition(s, v.userId, line, v.left, v.top);
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
