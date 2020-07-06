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

  const getLine = (meanPosition: number): number => {
    return (
      f.find((v: IField) => v.fieldPosition === meanPosition)?.fieldLine || 0
    );
  };

  return (
    <>
      {t.map((v: IToken, k) => {
        console.log(111);
        const samePos = findPosition(v.meanPosition).length;
        const line = getLine(v.meanPosition);

        const left =
          samePos !== 1 && (line === 1 || line === 3)
            ? v.left
            : v.left + samePos * k * 15;

        const top =
          samePos !== 1 && (line === 0 || line === 2)
            ? v.top + samePos * k * 15
            : v.top;

        return (
          <div
            key={k}
            mnpl-jailed={v.jailed}
            style={{
              left: `${left}px`,
              top: `${top}px `,
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
