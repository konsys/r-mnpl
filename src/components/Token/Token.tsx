import React from "react";
import { useStore } from "effector-react";
import { tokens, TokenParams } from "../../core/Game/TokensStore";

interface Props {
  id: number;
}

export const Token = (props: Props) => {
  const tokenStore = useStore(tokens);

  const token: TokenParams = tokenStore[props.id];
  const result =
    token &&
    token.moves.map(v => (
      <div
        mnpl-jailed={token.isJailed}
        style={{
          left: `${v.left}px`,
          top: `${v.top}px`,
          transitionDuration: `${v.duration}s`,
          transitionProperty: "left top"
          // transition: `${v.direction} ${v.duration}s ease`
        }}
        className="_animated"
      />
    ));
  return <>{result}</>;
};
