import {
  openPlayerActionEvent,
  playerActionStore,
} from "../../../stores/PlayersStore";

import { Avatar } from "../Avatar/Avatar";
import { IPlayer } from "../../../types/types";
import { PlayerActions } from "../PlayerActions/PlayerActions";
import React from "react";
import { actionsStore } from "../../../stores/ActionStore";
import { useStore } from "effector-react";
import { userStore } from "../../../stores/UserStore";

interface Prop {
  players: IPlayer[];
}

export const Players = (prop: Prop) => {
  const action = useStore(actionsStore);
  const user = useStore(userStore);
  const actionStore = useStore(playerActionStore);

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
                  actionStore.srcPlayer === player.userId
                    ? actionStore.position * 1
                    : 0
                }
                onClick={() => {
                  console.log(11111, user && user.userId, player.userId);

                  return openPlayerActionEvent({
                    srcPlayer: user ? user.userId : player.userId,
                    dstPlayer: player.userId,
                    isVisible: !actionStore?.isVisible,
                    position: 1,
                    ignore: false,
                    ignoreOff: false,
                    profile: true,
                    contract: true,
                    creditTake: true,
                    creditPay: false,
                    kick: false,
                    leave: true,
                    report: true,
                    restart: false,
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
