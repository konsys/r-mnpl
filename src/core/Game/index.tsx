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
let isGenerators = false;

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

const sweater = `<svg
height="315"
width="315"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
>
<defs>
  <g id="sweater-defs-chunk">
    <path
      d="M4.15084773,2.44203244 C5.62037125,3.96842685 6.35261152,5.23760841 6.80950525,7.31517322 C7.12216983,8.72537495 7.01525871,9.82771574 6.73890357,11.2260003 C6.52003836,12.3313204 6.13172913,13.4028751 5.82612472,12.8497185 C5.44386705,12.089004 4.92141463,11.5408129 4.32432614,10.9240979 C3.20377663,9.75919186 2.05599505,8.92101562 1.10993255,7.61012386 C0.142689541,6.26248742 0.0670448849,4.82249269 0.00451196903,3.42520125 C-0.0570123514,2.01897192 0.530998777,0 0.530998777,0 C1.16943968,0.0208550961 3.26832674,1.52440821 4.15084773,2.44203244"
      id="sweater-defs-chunk-left"
    ></path>
    <path
      d="M3.00327946,2.35276614 C3.89302576,1.45359416 5.98050745,0 6.59941889,0 C6.59941889,0 7.09513468,2.06950681 6.98367196,3.49588388 C6.87416472,4.90915643 6.74803585,6.36879883 5.76247072,7.70142816 C4.80037143,8.99877607 3.65543416,9.80823245 2.52809627,10.9503422 C1.92776196,11.5581905 1.39978064,12.0934599 1.0028169,12.8525143 C0.687005856,13.4059284 0.352617687,12.3041403 0.177601657,11.171103 C-0.0404350727,9.74573395 -0.102032893,8.62277702 0.249954653,7.20446427 C0.770114027,5.11278058 1.52493176,3.84970604 3.00327946,2.35276614"
      id="sweater-defs-chunk-right"
      transform="translate(7.5,0)"
    ></path>
  </g>
  <pattern
    height="9.5"
    id="sweater-defs-pattern"
    patternUnits="userSpaceOnUse"
    width="15"
    x=".25"
    y="-.5"
  >
    <g fill="#e70f21">
      <use
        xlink:href="#sweater-defs-chunk"
        transform="translate(0,-9.5)"
      ></use>
      <use xlink:href="#sweater-defs-chunk"></use>
    </g>
  </pattern>
  <g fill="#fff" id="sweater-defs-dot-row">
    <use
      xlink:href="#sweater-defs-chunk"
      transform="translate(0,0)"
    ></use>
    <use
      xlink:href="#sweater-defs-chunk"
      transform="translate(15,0)"
    ></use>
    <use
      xlink:href="#sweater-defs-chunk"
      transform="translate(30,0)"
    ></use>
  </g>
  <g fill="#fff" id="sweater-defs-dot">
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,0)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,9.5)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,19)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,28.5)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,38)"
    ></use>
  </g>
</defs>
<rect fill="#9b2b2e" height="100%" width="100%"></rect>
<rect
  fill="url(#sweater-defs-pattern)"
  height="100%"
  width="100%"
></rect>
</svg>`;
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
              <TableAction
                title={"Покупаем?"}
                sum={5}
                text={
                  "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион."
                }
                turn={turn}
              />

              <Arbitr />
              <Ticket />
              <Chat />
            </div>

            <div className="table-body-board-tokens">
              <Token param={player1} />
              <Token param={player2} />
            </div>
            <div className="table-body-board-generators">
              <Dices cl1={diceClass1} cl2={diceClass2} />
            </div>
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
