import React from "react";
import { useStore } from "effector-react";
import { tokens, TokenParams } from "../../core/Game/TokensStore";
import { TokenElement } from "./TokenElement";
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
  console.log(token);
  const result =
    token &&
    token.moves.map((v, k) => (
      <TokenElement
        key={k}
        isJailed={false}
        left={v.left}
        top={v.top}
        duration={v.duration}
      />
    ));

  return <>{result}</>;
};
