import { IPlayerAction } from "stores/Board/PlayersStore";
import React from "react";
import { openContractModal } from "stores/Board/ContractStore";
import { surrenderRoom } from "stores/Game/Board/BoardModel";

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
  fromUserId,
  toUserId,
}: IPlayerAction) => {
  return (
    <div className="table-body-players-card-menu">
      {profile && <div className="_profile" />}
      {ignore && <div className="_ignore" />}
      {ignoreOff && <div className="_ignore_off" />}
      {report && <div className="_report" />}
      {restart && <div className="_restart" />}
      {creditTake && <div className="_credit_take" />}
      {creditPay && <div className="_credit_pay" />}
      {leave && <div className="_leave" onClick={() => surrenderRoom()} />}
      {contract && (
        <div
          className="_contract"
          onClick={() =>
            openContractModal({
              fromUserId,
              toUserId,
            })
          }
        />
      )}
      {kick && <div className="_kick" />}
    </div>
  );
};
