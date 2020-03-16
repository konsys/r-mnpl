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
  const result =
    token &&
    token.moves.map((v, k) =>
      setTimeout(
        () => (
          <TokenElement
            key={k}
            isJailed={false}
            left={v.left}
            top={v.top}
            duration={v.duration}
          />
        ),
        1000
      )
    );

  console.log(result);
  return <>{result}</>;
};
