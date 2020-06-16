import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { useStore } from "effector-react";
import { actionsStore } from "../../../stores/ActionStore";
import { IPlayer } from "../../../types/BoardTypes";

interface Prop {
  players: IPlayer[];
}

export const Players = (prop: Prop) => {
  const action = useStore(actionsStore);

  return (
    <>
      <div className="table-body-players">
        {prop.players.map((player: IPlayer, index) => {
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
            >
              <Avatar
                key={index}
                name={player.name}
                money={player.money}
                remainTime={53}
                img={player.avatar ? player.avatar : ""}
                isVip={player.vip}
              />

              <div className="table-body-players-card-menu">
                <div className="_profile" />
                <div className="_ignore" />
                <div className="_report" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
