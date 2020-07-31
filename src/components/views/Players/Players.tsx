import React, { useEffect } from "react";
import {
  closePlayerActionEvent,
  openPlayerActionEvent,
  playerActionStore,
} from "../../../stores/PlayersStore";

import { Avatar } from "../Avatar/Avatar";
import { IPlayer } from "../../../types/types";
import { PlayerActions } from "./PlayerActions/PlayerActions";
import { actionsStore } from "../../../stores/ActionStore";
import { closeFieldActionEvent } from "../../../stores/FieldsStore";
import { useStore } from "effector-react";
import { userStore } from "../../../stores/UserStore";

interface Prop {
  players: IPlayer[];
}

export const Players = (prop: Prop) => {
  const action = useStore(actionsStore);
  const user = useStore(userStore);
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

  return (
    <>
      <div className="table-body-players">
        {prop.players &&
          prop.players.map((player: IPlayer, index) => {
            return (
              <div
                key={index}
                className="table-body-players-card"
                id={"player_card_" + player.userId}
                mnpl-order={player.moveOrder}
                mnpl-team={player.team}
                mnpl-action_player={
                  player &&
                  action.event.action &&
                  action.event.action.userId === player.userId
                    ? 1
                    : 0
                }
                mnpl-opened={
                  actionStore.isVisible &&
                  actionStore.toUserId === player.userId
                    ? actionStore.position * 1
                    : 0
                }
                onClick={() => {
                  closeFieldActionEvent();
                  const user1 = (user && user.userId) || player.userId;
                  const user2 = player.userId;

                  return openPlayerActionEvent({
                    fromUserId: user1,
                    toUserId: user2,
                    position: 1,
                    isVisible: !actionStore.isVisible,
                    ignore: user1 !== user2,
                    ignoreOff: user1 !== user2,
                    profile: user1 !== user2,
                    contract: user1 !== user2,
                    creditTake: user1 === user2,
                    creditPay: false,
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
            );
          })}
      </div>
    </>
  );
};
