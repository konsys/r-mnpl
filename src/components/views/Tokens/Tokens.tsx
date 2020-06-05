import React from "react";
import { LINE_TRANSITION_TIMEOUT } from "../../../utils/boardParams";
import { useStore } from "effector-react";
import { tokensStore } from "../../../stores/TokensStore";

export const Tokens = () => {
  return (
    <>
      {useStore(tokensStore).tokens.map((v, k) => {
        return (
          <div
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
