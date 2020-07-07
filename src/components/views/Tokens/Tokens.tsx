import React from "react";
import { LINE_TRANSITION_TIMEOUT } from "../../../utils/boardParams";
import { useStore } from "effector-react";
import { tokensStore } from "../../../stores/TokensStore";
import { IToken, IField } from "../../../types/types";
import { fieldsStore } from "../../../stores/FieldsStore";

export const Tokens = () => {
  const t = useStore(tokensStore).tokens;
  const f = useStore(fieldsStore).fields;

  const findPosition = (pos: number): IToken[] => {
    return t.filter((v) => v.meanPosition === pos);
  };

  interface IPosition {
    left: number;
    top: number;
  }

  const getLine = (meanPosition: number): number => {
    return (
      f.find((v: IField) => v.fieldPosition === meanPosition)?.fieldLine || 0
    );
  };

  const getPosition = (
    samePos: number,
    k: number,
    line: number,
    leftS: number,
    topS: number
  ): IPosition => {
    let top = topS;
    let left = leftS;
    const r = k + 1;

    if (samePos !== 1 && (line === 0 || line === 2)) {
      top = topS - samePos * 8 + 15 * r;

      if (r % 2 === 0) {
        left += 15;
      } else {
        left -= 10;
      }
    }

    if (samePos !== 1 && (line === 1 || line === 3)) {
      left = leftS - samePos * 8 + 15 * r;

      if (k % 2 === 0) {
        top += 15;
      } else {
        top -= 10;
      }
    }

    return {
      left,
      top,
    };
  };

  return (
    <>
      {t.map((v: IToken, k) => {
        let samePos = findPosition(v.meanPosition).length;
        const line = getLine(v.meanPosition);

        const t = getPosition(samePos, k, line, v.left, v.top);

        return (
          <div
            key={k}
            mnpl-jailed={v.jailed}
            style={{
              left: `${t.left}px`,
              top: `${t.top}px `,
              transitionDuration: `${LINE_TRANSITION_TIMEOUT}ms`,
              transitionProperty: "left top ease",
              transform: `scale(${samePos === 1 ? 1 : 0.7})`,
            }}
            same-pos={findPosition(v.meanPosition).length}
            className="_animated"
          />
        );
      })}
    </>
  );
};
