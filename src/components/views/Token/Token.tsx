import React from "react";
import { useStore } from "effector-react";
import {
  tokenPosition,
  tokens,
  tokenTransitionTime,
} from "../../../stores/TokensStore";
import { fieldsStore } from "../../../stores/FieldsStore";
interface Props {
  userId: number;
}

export const Token = (props: Props) => {
  let token = useStore(tokenPosition);
  let currToken = useStore(tokens);
  let fields = useStore(fieldsStore);
  let tokenParams = currToken[props.userId];

  return (
    <>
      {token && props.userId === token.userId && (
        <div
          mnpl-jailed={0}
          style={{
            left: `${token.left}px`,
            top: `${token.top}px`,
            transitionDuration: `${tokenTransitionTime}ms`,
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
