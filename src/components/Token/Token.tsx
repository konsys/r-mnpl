import React from "react";

export const Token = (props: any) => {
  const { position, isJailed } = props;
  let left = 35;
  let top = 35;
  left = position * 55;
  return (
    <>
      <div
        mnpl-position={position}
        mnpl-jailed={isJailed}
        style={{ top: `${top}px`, left: `${left}px` }}
        className="_animated"
      />
    </>
  );
};
