import React, { CSSProperties } from "react";
import { RouteComponentProps } from "@reach/router";
import "./style.scss";
import { Players } from "../../components/Players/Players";
import { Chat } from "../../components/Chat/Chat";
import { Contract } from "../../components/Contract/Contract";
import { TableHelper } from "../../components/TableHelper/TableHelper";
import { Token } from "../../components/Token/Token";
import { Ticket } from "../../components/Ticket/ticket";
import { Arbitr } from "../../components/Arbitr/Arbitr";
import { M1tv } from "../../components/M1tv/M1tv";
import { TableAction } from "../../components/TableAction/TableAction";
import { Board } from "../../components/Board/Board";
import { Dices } from "../../components/Dices/Dices";
import { GameLoading } from "../../components/GameLoading/GameLoading";

export interface PlayerToken {
  userId: number;
  mnplPosition: number;
  mnplJailed: number;
  mnplSamePos: number;
  mnplIndex: number;
  style: CSSProperties;
  class?: string;
}

interface Props extends RouteComponentProps {}

let tableActionVisible = true;
let isGenerators = true;

let diceClass1 = "";
let diceClass2 = "";

let diceValue1 = 1;
let diceValue2 = 1;

let player1Top = 18.3;
let player1Left = 18.3;

const resetDice = () => {
  setTimeout(() => {
    tableActionVisible = true;
    isGenerators = false;
    diceClass1 = "r0";
    diceClass2 = "r0";
  }, 2000);
};
const randDice = () => {
  diceValue1 = random(0, 6);
  diceValue2 = random(0, 6);
  setTimeout(() => (diceClass1 = "r" + diceValue1), 20);
  setTimeout(() => (diceClass2 = "r" + diceValue2), 20);
};

const turn = () => {
  isGenerators = true;
  tableActionVisible = false;
  randDice();
  player1Left = (diceValue1 + diceValue2 + 1) * 55;

  setTimeout(() => {
    player1.style.top = `${player1Top}px`;
    player1.style.left = `${player1Left}px`;
    player1.style.transitionDuration = `1000ms;`;
  }, 2000);

  resetDice();
};

function random(min: number, max: number) {
  return Math.ceil(min + Math.random() * (max - min));
}

const player1: PlayerToken = {
  userId: 1243457,
  mnplPosition: 0,
  mnplJailed: 0,
  mnplSamePos: 2,
  mnplIndex: 0,
  style: {
    top: `${player1Top}px`,
    left: `${player1Left}px`,
    transitionDuration: "3000ms"
  },
  class: "_animated"
};

const player2: PlayerToken = {
  userId: 429935,
  mnplPosition: 0,
  mnplJailed: 0,
  mnplSamePos: 2,
  mnplIndex: 1,
  style: { top: "51.7px", left: "51.7px" },
  class: "_animated"
};

export const Game = (props: Props) => (
  //
  <>
    <div className="wrapper" style={{ width: "100%", height: "100%" }}>
      <div className="table _shakehack">
        <div className="table-body">
          <Players />
          <div className="table-body-board">
            <Board />
            <div className="table-body-board-center">
              <M1tv />
              {tableActionVisible && (
                <TableAction
                  title={"Покупаем?"}
                  sum={5}
                  text={
                    "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион."
                  }
                  actions={[
                    // { title: `Купить за 2,800k`, onClick: turn },
                    // { title: `На аукцион`, onClick: turn },
                    { title: `Бросить кубики`, onClick: turn }
                  ]}
                />
              )}
              <Arbitr />
              <Ticket />
              <Chat />
            </div>

            <div className="table-body-board-tokens">
              <Token param={player1} />
              <Token param={player2} />
            </div>

            {isGenerators && <Dices cl1={diceClass1} cl2={diceClass2} />}
            <Contract />
            <TableHelper />
          </div>
        </div>

        <div id="placeholder_gameover"></div>
      </div>
      <div className="table-jokes"></div>
    </div>
    <GameLoading />
  </>
);
