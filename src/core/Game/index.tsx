import React, { CSSProperties } from "react";
import { RouteComponentProps } from "@reach/router";
import { Players } from "../../components/Players/Players";
import { TableAction } from "../../components/TableAction/TableAction";
import { Board } from "../../components/Board/Board";
import { Dices } from "../../components/Dices/Dices";
import { Chat } from "../../components/Chat/Chat";
import { Token } from "../../components/Token/Token";
import "../../styles/theme.scss";
import "./style.scss";

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
  <div className="wrapper" style={{ width: "100%", height: "100%" }}>
    <div className="table _shakehack">
      <div className="table-body">
        <Players />

        <div className="table-body-board">
          <Board />
          <div className="table-body-board-center">
            :
            {tableActionVisible && (
              <TableAction
                turn={turn}
                sum={diceValue1 + diceValue2}
                title={"Ваш ход!"}
                text={"Мы болеем за вас!"}
              />
            )}
            <Chat />
          </div>
          <div className="table-body-board-tokens">
            <Token player={player1} />
            <div
              mnpl-userid={player1.userId}
              mnpl-position={player1.mnplPosition}
              mnpl-jailed={player1.mnplJailed}
              mnpl-samepos={player1.mnplSamePos}
              mnpl-index={player1.mnplIndex}
              style={player1.style}
              className="_animated"
            />

            <div
              mnpl-userid={player2.userId}
              mnp-position={player2.mnplPosition}
              mnpl-jailed={player2.mnplJailed}
              mnpl-samepos={player2.mnplSamePos}
              mnpl-index={player2.mnplIndex}
              style={player2.style}
            />
          </div>

          <div className="table-body-board-generators">
            {isGenerators && <Dices cl1={diceClass1} cl2={diceClass2} />}
          </div>

          <div className="TableContract" style={{ display: "none" }}>
            <div className="TableContract-top">
              <div className="TableContract-top-title">Договор</div>
            </div>
            <div className="TableContract-content">
              <div className="TableContract-content-head" />
              <div className="TableContract-content-list" />
            </div>
            <div className="TableContract-actions">
              <div className="_future">Future</div>
            </div>
          </div>

          <div className="TableHelper" style={{ display: "none" }}>
            <div className="TableHelper-tabs _active_0">
              <div className="_stat _active">Статистика</div>
              <div className="_settings">Настройки</div>
            </div>
            <div className="TableHelper-content">
              <div>
                <div className="_matchtitle">
                  <div className="_icon _game_submode_0" />
                  <div className="_title">Обычная игра</div>
                </div>
                <div className="TableHelper-content-stat">
                  <div className="_time">
                    <div>0:21</div>
                    <div>время игры</div>
                  </div>
                  <div className="_round">
                    <div>1</div>
                    <div>раунд</div>
                  </div>
                  <div className="_roundtax _mod_0">
                    <div>2,000k</div>
                    <div />
                  </div>
                </div>
                <div className="TableHelper-content-players">
                  <div className="TableHelper-content-players-head">
                    <div />
                    <div className="_sortable _active">Активы</div>
                    <div className="_sortable">Счёт</div>
                  </div>
                  <div className="TableHelper-content-players-row">
                    <div>
                      <div className="_dot _index_0" />
                      <div
                        className="_avatar"
                        style={{
                          backgroundImage: `url(https://sun9-31.userapi.com/c844417/v844417154/8e8f7/r9mP6zHTi64.jpg?ava=1)`
                        }}
                      />
                      <div className="_nick">Дима</div>
                    </div>
                    <div>15,000</div>
                    <div>0</div>
                  </div>
                  <div className="TableHelper-content-players-row">
                    <div>
                      <div className="_dot _index_1" />
                      <div
                        className="_avatar"
                        style={{
                          backgroundImage: `url(https://vk.dogecdn.wtf/pp.userapi.com/c638617/v638617387/34347/wjfuzUjNdgE.jpg)`
                        }}
                      />
                      <div className="_nick">Константин</div>
                    </div>
                    <div>15,000</div>
                    <div>0</div>
                  </div>
                </div>
                <div className="TableHelper-content-viewers" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="placeholder_gameover" />
    </div>
    <div className="table-jokes" />
  </div>
);
