import React, { useState } from "react";

interface Props {
  position: number;
  userId: number;
  isJailed: 0 | 1;
}

export const Token = (props: Props) => {
  const { position, isJailed } = props;
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  let left1 = 0;
  let top1 = 0;

  if (position >= 0 && position <= 11) {
    left1 = left + (position + 1) * 55;
    if (props.userId < 2) {
      console.log("TOKEN1", position, left1, top1);
    }
  } else if (position >= 12 && position <= 21) {
    const curPos = position - 12;
    top1 = top + curPos * 55;
    if (props.userId < 2) {
      console.log("TOKEN2", position, curPos, left1, top1);
    }
  } else if (position >= 22 && position <= 31) {
    const curPos = position - 22;
    left1 = left - curPos * 55;
    if (props.userId < 2) {
      console.log("TOKEN3", position, curPos, left1, top1);
    }
  } else if (position >= 32 && position <= 40) {
    const curPos = position - 32;
    top1 = top - curPos * 55;
    if (props.userId < 2) {
      console.log("TOKEN4", position, curPos, left1, top1);
    }
  }

  setLeft(left1);
  setTop(top1);

  return (
    <>
      <div
        mnpl-jailed={isJailed}
        style={{ top: `${top1}px`, left: `${left1}px` }}
        className="_animated"
      />
    </>
  );
};
