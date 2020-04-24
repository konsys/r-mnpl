import React from "react";
import { useStore } from "effector-react";
import {
  tokenPositionStore,
  tokensStore,
  TRANSITION_LINE_TIMEOUT,
} from "../../../stores/TokensStore";
import { fieldsStore } from "../../../stores/FieldsStore";
import { TokenMove } from "../../../types/BoardTypes";
interface Props {
  userId: number;
  onTransitionEnd: (token: TokenMove) => void;
}

export const Token = (props: Props) => {
  let token = useStore(tokenPositionStore);
  let currToken = useStore(tokensStore);
  let fields = useStore(fieldsStore);
  let tokenParams = currToken.tokens.find((v) => v.userId === props.userId);

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
          {
            fields.fields.find(
              (v) => tokenParams && v.fieldPosition === tokenParams.meanPosition
            )?.name
          }
        </div>
      )}
    </>
  );
};
