import React from "react";
export const M1tv = (props: any) => (
  <>
    <div className="table-body-board-m1tv">
      <div className="table-body-board-m1tv-controls">
        <div mnpl-size="small" mnpl-action="rewind_back_60">
          –60
        </div>
        <div mnpl-size="small" mnpl-action="rewind_back_15">
          –15
        </div>
        <div mnpl-size="small" mnpl-action="rewind_back_5">
          –5
        </div>
        <div
          mnpl-size="big"
          mnpl-action="play"
          style={{ display: "none" }}
        ></div>
        <div mnpl-size="big" mnpl-action="pause"></div>
        <div mnpl-size="small" mnpl-action="rewind_fwd_5">
          +5
        </div>
        <div mnpl-size="small" mnpl-action="rewind_fwd_15">
          +15
        </div>
        <div mnpl-size="small" mnpl-action="rewind_fwd_60">
          +60
        </div>
      </div>
      <div className="table-body-board-m1tv-timer">
        <div></div>
        <div></div>
      </div>
      <div className="table-body-board-m1tv-speed">
        <div className="_btn">–</div>
        <div className="_val">M!</div>
        <div className="_btn">+</div>
      </div>
    </div>
  </>
);
