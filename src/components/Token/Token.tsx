import React from "react";
import { useStore } from "effector-react";
import {
  tokens,
  TokenParams,
  tokenPosition,
  TokenMove
} from "../../core/Game/TokensStore";
import { TokenElement } from "./TokenElement";
interface Props {
  userId: number;
}

export const Token = (props: Props) => {
  let tokenStore = useStore(tokenPosition);

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
          mnpl-jailed={0}
          style={{
            left: `${token.left}px`,
            top: `${token.top}px`,
            transitionDuration: `${1}s`,
            transitionProperty: "left top ease"
          }}
          className="_animated"
        />
      }
    </>
  );
};
