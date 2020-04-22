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
  // Порядковые номер начиная с 0 в игре
  playerId: number;
}
interface Prop {
  players: IUser[];
}

export const Players = (prop: Prop) => {
  const action = useStore(actionsStore);
  return (
    <>
      <div key={nanoid(4)} className="table-body-players">
        {prop.players.map((v: IUser, k: number) => {
          return (
            <div
              key={nanoid(4)}
              className="table-body-players-card"
              id={"player_card_" + v.userId}
              mnpl-order={k}
              mnpl-team={v.team}
              mnpl-action_player={action.event.action.userId}
            >
              <Avatar
                key={nanoid(4)}
                name={v.name}
                money={15000}
                remainTime={53}
                img={v.avatar ? v.avatar : ""}
                isVip={v.vip}
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
