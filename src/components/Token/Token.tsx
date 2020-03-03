import React from "react";
export const Token = (props: any) => (
  <>
    <div
      mnpl-userid={props.param.userId}
      mnpl-position={props.param.mnplPosition}
      mnpl-jailed={props.param.mnplJailed}
      mnpl-samepos={props.param.mnplSamePos}
      mnpl-index={props.param.mnplIndex}
      style={props.param.style}
      className={props.param.class}
    />
  </>
);
