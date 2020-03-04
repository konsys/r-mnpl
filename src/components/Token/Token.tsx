import React from "react";

export const Token = (props: any) => {
  console.log("TOKEN", props.param.mnplPosition);
  return (
    <>
      <div
        mnpl-userid={props.param.userId}
        mnpl-position={props.param.mnplPosition}
        mnpl-jailed={props.param.mnplJailed}
        mnpl-samepos={props.param.mnplSamePos}
        style={{ top: "35px", left: "35px" }}
        className="_animated"
      />
    </>
  );
};
