import React from "react";
import { useStore } from "effector-react";
import { tokens, TokenParams } from "../../core/Game/TokensStore";

interface Props {
  id: number;
}

export const Token = (props: Props) => {
  const tokenStore = useStore(tokens);

  const token: TokenParams = tokenStore[props.id];
  const result = token && (
    <div
      mnpl-jailed={token.isJailed}
      style={{
        left: `${token.left}px`,
        top: `${token.top}px`,
        transition: token.transition
      }}
      className="_animated"
    />
  );
  return <>{result}</>;
};
