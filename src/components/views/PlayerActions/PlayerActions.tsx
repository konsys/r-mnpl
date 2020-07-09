import React from "react";
import { IPlayerAction } from "../../../stores/PlayersStore";

export const PlayerActions = ({
  profile,
  ignore,
  ignoreOff,
  report,
  restart,
  creditTake,
  creditPay,
  leave,
  contract,
  kick,
}: IPlayerAction) => (
  <div className="table-body-players-card-menu">
    {profile && <div className="_profile" />}
    {ignore && <div className="_ignore" />}
    {ignoreOff && <div className="_ignore_off" />}
    {report && <div className="_report" />}
    {restart && <div className="_restart" />}
    {creditTake && <div className="_credit_take" />}
    {creditPay && <div className="_credit_pay" />}
    {leave && <div className="_leave" />}
    {contract && <div className="_contract" />}
    {kick && <div className="_kick" />}
  </div>
);
