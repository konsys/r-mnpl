import React from "react";
// import { PlayerToken } from "../../core/Game";

export const Token = (props: any) => (
  <>
    <div
      mnpl-userid={props.userId}
      mnpl-position={props.mnplPosition}
      mnpl-jailed={props.mnplJailed}
      mnpl-samepos={props.mnplSamePos}
      mnpl-index={props.mnplIndex}
      style={props.style}
      className={props.class}
    />
  </>
);
