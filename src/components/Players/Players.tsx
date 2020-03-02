import React from "react";
import { Avatar } from "../Avatar/Avatar";

export const Players = () => (
  <div className="table-body-players">
    <div
      className="table-body-players-card"
      id="player_card_1243457"
      mnpl-order="0"
      mnpl-team="undefined"
      mnpl-action_player="1"
    >
      <Avatar
        name={"Дима"}
        money={15000}
        remainTime={53}
        img={
          "https://sun9-31.userapi.com/c844417/v844417154/8e8f7/r9mP6zHTi64.jpg?ava=1"
        }
        isVip={true}
      />

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
      <div className="table-body-players-card-body">
        <div className="table-body-players-card-body-avatar">
          <div>
            <div
              style={{
                backgroundImage: `url(
                  "https://vk.dogecdn.wtf/pp.userapi.com/c638617/v638617387/34347/wjfuzUjNdgE.jpg"
                )`
              }}
            />
          </div>
        </div>
        <div className="table-body-players-card-body-nick">
          <div className="_vip" style={{ display: "none" }} />
          <div className="_nick">
            <div>Константин</div>
          </div>
          <div className="_muted" style={{ display: "none" }} />
          <div className="_ignore" style={{ display: "none" }} />
        </div>
        <div className="table-body-players-card-body-money">15,000</div>
        <div
          className="table-body-players-card-body-timer"
          style={{ display: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <circle cx="50" cy="50" r="46" transform="rotate(-90 50 50)" />
          </svg>
          <div>75</div>
        </div>
      </div>
      <div className="table-body-players-card-menu">
        <div className="_profile" />
        <div className="_leave" />
      </div>
    </div>
  </div>
);
