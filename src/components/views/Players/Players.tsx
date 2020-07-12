import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { useStore } from "effector-react";
import { actionsStore } from "../../../stores/ActionStore";
import { IPlayer } from "../../../types/types";
import { PlayerActions } from "../PlayerActions/PlayerActions";
import {
  playerActionStore,
  openPlayerActionEvent,
} from "../../../stores/PlayersStore";

interface Prop {
  players: IPlayer[];
}

export const Players = (prop: Prop) => {
  const action = useStore(actionsStore);
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
                  action.event.action.userId === player.userId ? 1 : 0
                }
                mnpl-opened={
                  actionStore.isVisible &&
                  actionStore.srcPlayer === player.userId
                    ? actionStore.position * 1
                    : 0
                }
                onClick={() =>
                  openPlayerActionEvent({
                    srcPlayer: player.userId,
                    distPlayer: player.userId,
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
                  })
                }
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
