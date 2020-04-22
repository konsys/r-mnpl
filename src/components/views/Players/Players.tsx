import React from "react";
import { Avatar } from "../Avatar/Avatar";
import nanoid from "nanoid";
import { useStore } from "effector-react";
import { actionsStore } from "../../../stores/ActionStore";

export interface IUser {
  userId: number;
  vip: boolean;
  registrationType?: string;
  name: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive: boolean;
  isBlocked: boolean;
  team?: string;
}

export interface IPlayer extends IUser {
  moveOrder: 0 | 1 | 2 | 3;
}
interface Prop {
  players: IPlayer[];
}

export const Players = (prop: Prop) => {
  const action = useStore(actionsStore);

  console.log("moveOrder", action);

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
                money={15000}
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
