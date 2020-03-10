import React from "react";
// import { Avatar } from "../Avatar/Avatar";

export const Players = () => (
  <div className="table-body-players">
    <div
      className="table-body-players-card"
      id="player_card_1243457"
      mnpl-order="0"
      mnpl-team="undefined"
      mnpl-action_player="1"
    >
      {/* <Avatar
        name={"Дима"}
        money={15000}
        remainTime={53}
        img={
          "https://sun9-31.userapi.com/c844417/v844417154/8e8f7/r9mP6zHTi64.jpg?ava=1"
        }
        isVip={true}
      /> */}

      <div className="table-body-players-card-menu">
        <div className="_profile" />
        <div className="_ignore" />
        <div className="_report" />
      </div>
    </div>

    <div
      className="table-body-players-card"
      id="player_card_429935"
      mnpl-order="1"
      mnpl-team="undefined"
    >
      {/* <Avatar
        name={"Константин"}
        money={23000}
        remainTime={53}
        img={
          "https://vk.dogecdn.wtf/pp.userapi.com/c638617/v638617387/34347/wjfuzUjNdgE.jpg"
        }
        isVip={true}
      /> */}

      <div className="table-body-players-card-menu">
        <div className="_profile" />
        <div className="_leave" />
      </div>
    </div>
  </div>
);
