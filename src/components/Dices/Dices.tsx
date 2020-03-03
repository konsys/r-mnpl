import React from "react";

interface Props {
  cl1: string;
  cl2: string;
}
export const Dices = (props: Props) => (
  <div className="table-body-board-generators">
    <div className="dices">
      <div className={props.cl1 + " diceBody"}>
        <div className="diceFace diceValue1">
          <div className="dot center" />
        </div>
        <div className="diceFace diceValue2">
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
        </div>
        <div className="diceFace dice3">
          <div className="dot dtop dright" />
          <div className="dot center" />
          <div className="dot dbottom dleft" />
        </div>
        <div className="diceFace dice4">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
        </div>
        <div className="diceFace dice5">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot center" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
        </div>
        <div className="diceFace dice6">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
          <div className="dot center dleft" />
          <div className="dot center dright" />
        </div>
      </div>

      <div className={props.cl2 + " diceBody"}>
        <div className="diceFace diceValue1">
          <div className="dot center" />
        </div>
        <div className="diceFace diceValue2">
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
        </div>
        <div className="diceFace dice3">
          <div className="dot dtop dright" />
          <div className="dot center" />
          <div className="dot dbottom dleft" />
        </div>
        <div className="diceFace dice4">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
        </div>
        <div className="diceFace dice5">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot center" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
        </div>
        <div className="diceFace dice6">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
          <div className="dot center dleft" />
          <div className="dot center dright" />
        </div>
      </div>
    </div>
  </div>
);
