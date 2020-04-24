import React from "react";
import { useStore } from "effector-react";
import { tokenMoveStore } from "../../../stores/TokensStore";
import { fieldsStore } from "../../../stores/FieldsStore";
import { TokenMove } from "../../../types/BoardTypes";
import { playersStore } from "../../../stores/PlayersStore";
import { TRANSITION_LINE_TIMEOUT } from "../../../utils/boardParams";
interface Props {
  userId: number;
  onTransitionEnd: (token: TokenMove) => void;
}

export const Token = (props: Props) => {
  let token = useStore(tokenMoveStore);
  let currPlayer = useStore(playersStore);
  let fields = useStore(fieldsStore);
  let playerParams = currPlayer.players.find((v) => v.userId === props.userId);

  return (
    <>
      {console.log(1111111111, props.userId, token)}
      {token && (
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
              (v) =>
                playerParams && v.fieldPosition === playerParams.meanPosition
            )?.name
          }
        </div>
      )}
    </>
  );
};
