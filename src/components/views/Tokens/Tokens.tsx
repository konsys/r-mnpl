import React from "react";
import { LINE_TRANSITION_TIMEOUT } from "../../../utils/boardParams";
import { useStore } from "effector-react";
import { tokensStore } from "../../../stores/TokensStore";

interface Props {
  onTransitionEnd: (userId: number) => any;
}

export const Tokens = (prop: Props) => {
  return (
    <>
      {useStore(tokensStore).tokens.map((v, k) => {
        // console.log(111111, v);
        return (
          <div
            onTransitionEnd={
              v.jailed ? () => null : () => prop.onTransitionEnd(v.userId)
            }
            key={k}
            mnpl-jailed={v.jailed}
            style={{
              left: `${v.left}px`,
              top: `${v.top}px`,
              transitionDuration: `${LINE_TRANSITION_TIMEOUT}ms`,
              transitionProperty: "left top ease",
            }}
            className="_animated"
          />
        );
      })}
    </>
  );
};
