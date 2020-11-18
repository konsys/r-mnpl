import { IPlayer, IUser } from "types/types";
import React, { useEffect } from "react";
import {
  closePlayerActionEvent,
  openPlayerAction,
  playerActionStore,
} from "stores/Board/PlayersStore";

import { Avatar } from "../Avatar/Avatar";
import { ICurrentAction } from "stores/Board/ActionStore";
import { PlayerActions } from "./PlayerActions/PlayerActions";
import { closeFieldAction } from "stores/Board/FieldsStore";
import { useStore } from "effector-react";
import { get } from "lodash";

interface Prop {
  players: IPlayer[];
  user: IUser;
  action: ICurrentAction;
}

export const Players = ({ players, user, action }: Prop) => {
  const actionStore = useStore(playerActionStore);

  const closePlayerAction = (event: any) => {
    (!event.target && !event.target.id && closePlayerActionEvent()) ||
      (event.target.id &&
        !(event.target.id.indexOf("player_card") > -1) &&
        closePlayerActionEvent());
  };

  useEffect(() => {
    document.addEventListener("click", closePlayerAction, false);
    return () => {
      document.removeEventListener("click", closePlayerAction, false);
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
                  actionStore.isVisible &&
                  actionStore.toUserId === player.userId
                    ? actionStore.position * 1
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
                    isVisible: !actionStore.isVisible,
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
                <PlayerActions {...actionStore} />
              </div>
            ) : (
              ""
            );
          })}
      </div>
    </>
  );
};
