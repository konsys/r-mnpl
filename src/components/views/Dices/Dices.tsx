import React from "react";
import { useStore } from "effector-react";
import { dicesStore } from "../../../stores/DicesStore";

export const Dices = () => {
  const d = useStore(dicesStore);

  return (
    <div className="table-body-board-generators">
      <div className="dices">
        <div className={`r${d.dices?.length && d.dices[0]} diceBody`}>
          <div className="diceFace dice1">
            <div className="dot center" />
          </div>
          <div className="diceFace dice2">
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

        <div className={`r${d.dices?.length && d.dices[1]} diceBody`}>
          <div className="diceFace dice1">
            <div className="dot center" />
          </div>
          <div className="diceFace dice2">
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
        {d.dices?.length && d.dices[2] && (
          <div className={`r${d.dices[2]} diceBody`}>
            <div className="diceFace dice1">
              <div className="dot center" />
            </div>
            <div className="diceFace dice2">
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
        )}
      </div>
    </div>
  );
};
