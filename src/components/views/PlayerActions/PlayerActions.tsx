import { IPlayerAction } from "../../../stores/PlayersStore";
import React from "react";
import { openContractModal } from "../../../stores/UserStore";

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
  srcPlayer,
  dstPlayer,
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
    {contract && (
      <div
        className="_contract"
        onClick={() =>
          openContractModal({
            fromUserId: srcPlayer,
            toUserId: dstPlayer,
          })
        }
      />
    )}
    {kick && <div className="_kick" />}
  </div>
);
