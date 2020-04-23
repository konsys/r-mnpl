import React from "react";
import { Avatar } from "../Avatar/Avatar";
import nanoid from "nanoid";
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
      <div key={nanoid(4)} className="table-body-players">
        {prop.players.map((player: IPlayer) => {
          return (
            <div
              key={nanoid(4)}
              className="table-body-players-card"
              id={"player_card_" + player.userId}
              mnpl-order={player.moveOrder}
              mnpl-team={player.team}
              mnpl-action_player={
                action.event.action.userId === player.userId ? 1 : 0
              }
            >
              <Avatar
                key={nanoid(4)}
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
