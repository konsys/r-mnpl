import React from "react";
import { Avatar } from "../Avatar/Avatar";
import nanoid from "nanoid";

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
}
interface Prop {
  users: IUser[];
}

export const Players = (prop: Prop) => (
  <>
    <div key={nanoid(4)} className="table-body-players">
      {prop.users.map((v: IUser, k: number) => {
        const actionPlayer = k === 1 ? "1" : "0";
        return (
          <div
            key={nanoid(4)}
            className="table-body-players-card"
            id={"player_card_" + v.userId}
            mnpl-order="0"
            mnpl-team="undefined"
            mnpl-action_player={actionPlayer}
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
