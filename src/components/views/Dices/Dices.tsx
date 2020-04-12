import React from "react";
import { useStore } from "effector-react";
import { dicesStore } from "../../../stores/DicesStore";

export const Dices = () => {
  const d = useStore(dicesStore);
  const dice1 = (d.dices?.length === 3 && d.dices[0]) || 1;
  const dice2 = (d.dices?.length === 3 && d.dices[1]) || 1;
  const dice3 = (d.dices?.length === 3 && d.dices[2]) || 0;
  return (
    <div className="table-body-board-generators">
      <div className="dices">
        <div className={`r${dice1} diceBody`}>
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

        <div className={`r${dice2} diceBody`}>
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
        {dice3 && (
          <div className={`r${dice3} diceBody`}>
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
