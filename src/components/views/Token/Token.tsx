import React from "react";
import { useStore } from "effector-react";
import { fieldsStore } from "../../../stores/FieldsStore";
import { playersStore } from "../../../stores/PlayersStore";
import { TRANSITION_LINE_TIMEOUT } from "../../../utils/boardParams";
interface Props {
  userId: number;
  onTransitionEnd: (id: any) => void;
}

export const Token = (props: Props) => {
  let fields = useStore(fieldsStore);
  let player = useStore(playersStore).players.find(
    (v) => v.userId === props.userId
  );

  return (
    <>
      {player && (
        <div
          onTransitionEnd={() => props.onTransitionEnd(player?.userId)}
          mnpl-jailed={0}
          style={{
            left: `${player.tokenLeftPosition}px`,
            top: `${player.tokenTopPosition}px`,
            transitionDuration: `${TRANSITION_LINE_TIMEOUT}ms`,
            transitionProperty: "left top ease",
          }}
          className="_animated"
        >
          {
            fields.fields.find(
              (v) => player && v.fieldPosition === player.meanPosition
            )?.name
          }
        </div>
      )}
    </>
  );
};
