import React from "react";
export const Ticket = (props: any) => (
  <>
    <div className="table-body-board-ticket" style={{ display: "none" }}>
      <div className="table-body-board-ticket-side">
        <div>
          <img src="//m1.dogecdn.wtf/tickets/m1cup-2018.svg" />
        </div>
        <div className="_button">
          <input
            type="button"
            className="button button-free button-small"
            value="Купить за 59 р."
          />
        </div>
      </div>
      <div className="table-body-board-ticket-text">
        <div className="_title">Билет на M1 Cup 2018</div>
        <div className="_text">
          Купив и активировав этот билет, вы получите шанс на получение
          сувенирных кейсов во время просмотра матчей M1 Cup.
        </div>
      </div>
    </div>
  </>
);
