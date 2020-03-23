import React from "react";
import { useStore } from "effector-react";
import { boardFields } from "../Board/Board";
import { tokenPosition, tokens } from "../../core/GameCore/TokensStore";
interface Props {
  userId: number;
}

export const Token = (props: Props) => {
  let token = useStore(tokenPosition);
  let currToken = useStore(tokens);
  let tokenParams = currToken[props.userId];

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
          {
            boardFields.find(v => v.fieldPosition - 1 === tokenParams.fieldId)
              ?.name
          }
        </div>
      )}
    </>
  );
};
