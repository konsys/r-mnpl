import React from "react";
import { useStore } from "effector-react";
import {
  tokenPosition,
  tokensStore,
  TokenMove,
  TRANSITION_LINE_TIMEOUT,
} from "../../../stores/TokensStore";
import { fieldsStore } from "../../../stores/FieldsStore";
interface Props {
  userId: number;
  onTransitionEnd: (token: TokenMove) => void;
}

export const Token = (props: Props) => {
  let token = useStore(tokenPosition);
  let currToken = useStore(tokensStore);
  let fields = useStore(fieldsStore);
  let tokenParams = currToken[props.userId];

  return (
    <>
      {token && props.userId === token.userId && (
        <div
          onTransitionEnd={() => props.onTransitionEnd(token)}
          mnpl-jailed={0}
          style={{
            left: `${token.left}px`,
            top: `${token.top}px`,
            transitionDuration: `${TRANSITION_LINE_TIMEOUT}ms`,
            transitionProperty: "left top ease",
          }}
          className="_animated"
        >
          {fields.find((v) => v.fieldPosition === tokenParams.fieldId)?.name}
        </div>
      )}
    </>
  );
};
