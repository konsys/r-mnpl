import React from "react";
export const Arbitr = (props: any) => (
  <>
    <div className="table-body-board-center-arbitr">
      <input
        id="arbitr-pause"
        type="button"
        className="button button-small button-free button-grass"
        value="Приостановить игру"
      />
      <input
        id="arbitr-unpause"
        type="button"
        className="button button-small button-free button-grass"
        value="Возобновить игру"
        style={{ display: "none" }}
      />
      <input
        id="arbitr-uncontract"
        type="button"
        className="button button-small button-free button-grapefruit"
        value="Откатить договор"
        style={{ display: "none" }}
      />
    </div>
  </>
);
