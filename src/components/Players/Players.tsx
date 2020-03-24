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
  users: any[];
}

export const Players = (prop: Prop) =>
  prop.users.map(v => {
    return (
      <div className="table-body-players">
        <div
          className="table-body-players-card"
          id="player_card_1243457"
          mnpl-order="0"
          mnpl-team="undefined"
          mnpl-action_player="1"
        >
          <Avatar
            key={nanoid(4)}
            name={v.name}
            money={15000}
            remainTime={53}
            img={v.avatar || ""}
            isVip={true}
          />

          <div className="table-body-players-card-menu">
            <div className="_profile" />
            <div className="_ignore" />
            <div className="_report" />
          </div>
        </div>
      </div>
    );
  });
