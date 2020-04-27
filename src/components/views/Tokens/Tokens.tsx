import React from "react";
import { LINE_TRANSITION_TIMEOUT } from "../../../utils/boardParams";
import { useStore } from "effector-react";
import { playersStore } from "../../../stores/PlayersStore";

interface Props {
  onTransitionEnd: (id: any) => void;
}

export const Tokens = (props: Props) => {
  const players = useStore(playersStore);
  // const token = (
  //   {players.players.map((p)=>())}
  // );
  return (
    <>
      {
        <div
          onTransitionEnd={() =>
            props.onTransitionEnd(
              players.players.length && players.players[0].userId
            )
          }
          mnpl-jailed={0}
          style={{
            left: `${
              players.players.length && players.players[0].tokenLeftPosition
            }px`,
            top: `${
              players.players.length && players.players[0].tokenTopPosition
            }px`,
            transitionDuration: `${LINE_TRANSITION_TIMEOUT}ms`,
            transitionProperty: "left top ease",
          }}
          className="_animated"
        />
      }
    </>
  );
};
