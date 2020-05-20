import React from "react";
import {
  LINE_TRANSITION_TIMEOUT,
  FIELD_JAIL_LEFT,
  FIELD_JAIL_TOP,
} from "../../../utils/boardParams";
import { useStore } from "effector-react";
import { playersStore } from "../../../stores/PlayersStore";
import { actionsStore } from "../../../stores/ActionStore";

interface Props {
  onTransitionEnd: (id: number, actionId: string) => void;
}

export const Tokens = (props: Props) => {
  return (
    <>
      {useStore(playersStore).players.map((v, k) => {
        const left = v.jailed ? FIELD_JAIL_LEFT : v.tokenLeftPosition;
        const top = v.jailed ? FIELD_JAIL_TOP : v.tokenTopPosition;
        return (
          <div
            key={k}
            onTransitionEnd={() => {
              props.onTransitionEnd(v.userId, actionsStore.getState().actionId);
            }}
            mnpl-jailed={v.jailed}
            style={{
              left: `${left}px`,
              top: `${top}px`,
              transitionDuration: `${LINE_TRANSITION_TIMEOUT}ms`,
              transitionProperty: "left top ease",
            }}
            className="_animated"
          />
        );
      })}
    </>
  );
};
