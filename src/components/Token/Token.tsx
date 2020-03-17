import React from "react";
import { useStore } from "effector-react";
import {
  tokens,
  TokenParams,
  tokenPosition,
  TokenMove
} from "../../core/Game/TokensStore";
import { TokenElement } from "./TokenElement";
// import { sample } from "effector";
// import { rollDicesFX } from "../../core/Game/DicesStore";

interface Props {
  userId: number;
}

export const Token = (props: Props) => {
  let tokenStore = useStore(tokenPosition);
  // const tokenStore1 = sample(tokens, rollDicesFX.done, v => v);
  // tokenStore1.watch(v => console.log(222222, v));

  const token: TokenMove = tokenStore;
  const result = token && (
    <TokenElement
      isJailed={0}
      left={token.left}
      top={token.top}
      duration={token.duration}
    />
  );

  // console.log("->", token.left, token.top);
  return (
    <>
      {
        <div
          mnpl-jailed={false}
          style={{
            left: `${token.left}px`,
            top: `${token.top}px`,
            transitionDuration: `${0.11}s`,
            transitionProperty: "left top linear"
          }}
          className="_animated"
        />
      }
    </>
  );
};
