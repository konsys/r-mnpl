import React from "react";
import { useStore } from "effector-react";
import { tokens, TokenParams } from "../../core/Game/TokensStore";
// import { sample } from "effector";
// import { rollDicesFX } from "../../core/Game/DicesStore";

interface Props {
  id: number;
}

export const Token = (props: Props) => {
  let tokenStore = useStore(tokens);
  // const tokenStore1 = sample(tokens, rollDicesFX.done, v => v);
  // tokenStore1.watch(v => console.log(222222, v));

  const token: TokenParams = tokenStore[props.id];
  const result =
    token &&
    token.moves.map((v, k) => (
      <div
        key={k}
        mnpl-jailed={token.isJailed}
        style={{
          left: `${v.left}px`,
          top: `${v.top}px`,
          transitionDuration: `${v.duration}s`,
          transitionProperty: "left top"
        }}
        className="_animated"
      />
    ));

  return <>{result}</>;
};
