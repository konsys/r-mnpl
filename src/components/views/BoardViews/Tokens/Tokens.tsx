import { IField, IToken } from "../../../../types/types";

import { LINE_TRANSITION_TIMEOUT } from "../../../../utils/boardParams";
import React from "react";
import _ from "lodash";

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

  interface IPosition {
    left: number;
    top: number;
  }

  const getLine = (meanPosition: number): number => {
    return (
      fields.find((v: IField) => v.fieldPosition === meanPosition)?.fieldLine ||
      0
    );
  };

  const getPosition = (
    t: IToken[],
    userId: number,
    line: number,
    leftS: number,
    topS: number
  ): IPosition => {
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

  const res = group(tokens);

  return (
    <>
      {tokens.map((v: IToken, k) => {
        const line = getLine(v.meanPosition);
        const s = res[v.meanPosition];
        const t = getPosition(s, v.userId, line, v.left, v.top);
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
