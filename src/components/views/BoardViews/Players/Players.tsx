import { IPlayer, IUser } from "types/types";
import React, { useEffect } from "react";
import {
  openPlayerAction,
  playerAction$,
  closePlayerAction,
} from "stores/Board/PLayerActionStore";

import { Avatar } from "../Avatar/Avatar";
import { ICurrentAction } from "stores/Board/ActionStore";
import { PlayerActions } from "./PlayerActions/PlayerActions";
import { useStore } from "effector-react";
import { get } from "lodash";
import { closeFieldAction } from "stores/Board/FieldActionStore";

interface Prop {
  players: IPlayer[];
  user: IUser;
  action: ICurrentAction;
}

export const Players = ({ players, user, action }: Prop) => {
  const plAction = useStore(playerAction$);

  const closePlayerModal = (event: any) => {
    (!event.target && !event.target.id && closePlayerAction()) ||
      (event.target.id &&
        !(event.target.id.indexOf("player_card") > -1) &&
        closePlayerAction());
  };

  useEffect(() => {
    document.addEventListener("click", closePlayerModal, false);
    return () => {
      document.removeEventListener("click", closePlayerModal, false);
    };
  }, []);

  const actionUserId = get(action, "event.action.userId");
  return (
    <>
      <div className="table-body-players">
        {Array.isArray(players) &&
          players.map((player: IPlayer, index) => {
            return player && player.userId ? (
              <div
                key={index}
                className="table-body-players-card"
                id={`player_card_${player.userId}`}
                mnpl-order={player.moveOrder}
                mnpl-team={player.team}
                mnpl-action_player={actionUserId === player.userId ? 1 : 0}
                mnpl-opened={
                  plAction.isVisible && plAction.toUserId === player.userId
                    ? plAction.position * 1
                    : 0
                }
                onClick={() => {
                  closeFieldAction();
                  const user1 = (user && user.userId) || player.userId;
                  const user2 = player.userId;

                  return openPlayerAction({
                    fromUserId: user1,
                    toUserId: user2,
                    position: 1,
                    isVisible: !plAction.isVisible,
                    ignore: user1 !== user2,
                    ignoreOff: user1 !== user2,
                    profile: user1 !== user2,
                    contract: user1 !== user2,
                    creditTake: user1 === user2,
                    creditPay: user1 === user2,
                    kick: user1 !== user2,
                    leave: user1 === user2,
                    report: user1 !== user2,
                    restart: user1 === user2,
                  });
                }}
              >
                <Avatar
                  key={index}
                  name={player.name}
                  money={player.money}
                  remainTime={53}
                  avatar={player.avatar ? player.avatar : ""}
                  isVip={player.vip}
                />
                <PlayerActions {...plAction} />
              </div>
            ) : (
              ""
            );
          })}
      </div>
    </>
  );
};
