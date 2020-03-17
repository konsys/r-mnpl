import React from "react";
import { useStore } from "effector-react";
import { tokens, TokenParams } from "../../core/Game/TokensStore";
// import { sample } from "effector";
// import { rollDicesFX } from "../../core/Game/DicesStore";

interface Props {
  left: number;
  top: number;
  duration: number;
  isJailed: 0 | 1 | 2 | 3;
}

export const TokenElement = (props: Props) => {
  const result = (
    <div
      mnpl-jailed={props.isJailed}
      style={{
        left: `${props.left}px`,
        top: `${props.top}px`,
        transitionDuration: `${props.duration}s`,
        transitionProperty: "left top"
      }}
      className="_animated"
    />
  );

  return <>{result}</>;
};
