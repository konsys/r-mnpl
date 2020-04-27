import React from "react";
import { LINE_TRANSITION_TIMEOUT } from "../../../utils/boardParams";
import { useStore } from "effector-react";
import { playersStore } from "../../../stores/PlayersStore";

interface Props {
  onTransitionEnd: (id: any) => void;
}

export const Tokens = (props: Props) => {
  const players = useStore(playersStore).players;
  // const token = (
  //   {players.players.map((p)=>())}
  // );
  return (
    <>
      {players.map((v) => (
        <div
          onTransitionEnd={() => props.onTransitionEnd(v.userId)}
          mnpl-jailed={0}
          style={{
            left: `${v.tokenLeftPosition}px`,
            top: `${v.tokenTopPosition}px`,
            transitionDuration: `${LINE_TRANSITION_TIMEOUT}ms`,
            transitionProperty: "left top ease",
          }}
          className="_animated"
        />
      ))}
    </>
  );
};
