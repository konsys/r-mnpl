import React from "react";
import { useStore } from "effector-react";
import { tokenPosition, tokens } from "../../core/Game/TokensStore";
interface Props {
  userId: number;
}

export const Token = (props: Props) => {
  let token = useStore(tokenPosition);
  let currToken = useStore(tokens);
  let t = currToken[props.userId];
  console.log(11111, currToken);
  return (
    <>
      {token && props.userId === token.userId && (
        <div
          mnpl-jailed={0}
          style={{
            left: `${token.left}px`,
            top: `${token.top}px`,
            transitionDuration: `${0.8}s`,
            transitionProperty: "left top ease"
          }}
          className="_animated"
        >
          {t.fieldId}
        </div>
      )}
      }
    </>
  );
};
