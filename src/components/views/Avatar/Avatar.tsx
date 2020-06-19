import React from "react";
import { Params } from "../../../config/params";

export interface AvatarProps {
  money: number;
  remainTime: number;
  isVip: boolean;
  avatar: string;
  name: string;
}
export const Avatar = (props: AvatarProps) => (
  <div className="table-body-players-card-body">
    <div className="table-body-players-card-body-avatar">
      <div>
        <div
          style={{ backgroundImage: `url(${Params.BASE_URL}${props.avatar})` }}
        />
      </div>
    </div>
    <div className="table-body-players-card-body-nick">
      {props.isVip && <div className="_vip" />}
      <div className="_nick">
        <div>{props.name}</div>
      </div>
      <div className="_muted" style={{ display: "none" }} />
      <div className="_ignore" style={{ display: "none" }} />
    </div>
    <div className="table-body-players-card-body-money">{props.money}</div>
    <div
      className="table-body-players-card-body-timer"
      style={{ display: "block" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle cx="50" cy="50" r="46" transform="rotate(-90 50 50)" />
      </svg>
      <div>{props.remainTime}</div>
    </div>
  </div>
);
