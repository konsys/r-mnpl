import React from "react";
import { IPlayer } from "../../../types/types";

export const PlayerActions = ({ name }: IPlayer) => {
  console.log(33333, name);
  return (
    <div className="table-body-players-card-menu">
      <div className="_profile" />
      <div className="_ignore" />
      <div className="_report" />
      <div className="_restart" />
      <div className="_credit_take" />
      <div className="_credit_pay" />
      <div className="_leave" />
      <div className="_contract" />
      <div className="_kick" />
    </div>
  );
};
