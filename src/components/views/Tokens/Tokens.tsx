import React from "react";
import {
  LINE_TRANSITION_TIMEOUT,
  FIELD_JAIL_LEFT,
  FIELD_JAIL_TOP,
} from "../../../utils/boardParams";
import { useStore } from "effector-react";
import { tokensStore } from "../../../stores/TokensStore";
import { getPlayerById } from "../../../utils/players.utils";

interface Props {
  onTransitionEnd: (userId: number) => any;
}
export const Tokens = (prop: Props) => {
  return (
    <>
      {useStore(tokensStore).tokens.map((v, k) => {
        const player = getPlayerById(v.userId);
        const left = player?.jailed ? FIELD_JAIL_LEFT : v.left;
        const top = player?.jailed ? FIELD_JAIL_TOP : v.top;
        return (
          <div
            onTransitionEnd={() => prop.onTransitionEnd(v.userId)}
            key={k}
            mnpl-jailed={player?.jailed}
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
