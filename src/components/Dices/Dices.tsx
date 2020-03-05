import React from "react";

interface Props {
  value1: number;
  value2: number;
  value3: number | null;
}
export const Dices = (props: Props) => {
  return (
    <div className="table-body-board-generators">
      <div className="dices">
        <div className={"r" + props.value1 + " diceBody"}>
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

        <div className={"r" + props.value2 + " diceBody"}>
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
};
