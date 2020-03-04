import React, { CSSProperties, useState } from "react";
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
  userId?: number;
  mnplPosition: number;
  mnplJailed: number;
  mnplSamePos: number;
}

interface Props extends RouteComponentProps {}

let diceValue1 = 1;
let diceValue2 = 1;

const random = (min: number, max: number) => {
  return Math.ceil(min + Math.random() * (max - min));
};

// ST00011|Name=Волго-Вятский филиал АО "Ростехинвентаризация - Федеральное БТИ"|
// PersonalAcc=40702810442000023477|
// BankName=Волго-Вятский банк ПАО Сбербанк г.Нижний Новгород|
// BIC=042202603|
// CorrespAcc=30101810900000000603|
// PayeeINN=9729030514|
// Contract=12/1-000219/20|
// LastName=СЫСУЕВ|
// FirstName=КОНСТАНТИН|
// MiddleName=АЛЕКСАНДРОВИЧ|
// PayerAddress=Российская Федерация|
// Sum=1174541

export const Game = (props: Props) => {
  const [isGenerators, setIsGenerators] = useState(false);
  const [diceValue1, setDiceValue1] = useState(0);
  const [diceValue2, setDiceValue2] = useState(0);
  const [tableActionVisible, setTableActionVisible] = useState(true);
  const [generatorOneClass, setGeneratorOneClass] = useState("");
  const [generatorTwoClass, setGeneratorTwoClass] = useState("");

  const [player1, setPlayer1] = useState({
    userId: 1243457,
    mnplPosition: 0,
    mnplJailed: 0,
    mnplSamePos: 2
  });
  const [player2, setPlayer2] = useState({
    userId: 1243457,
    mnplPosition: 0,
    mnplJailed: 0,
    mnplSamePos: 2
  });

  const resetDice = () => {
    setTimeout(() => {
      setTableActionVisible(true);
      setIsGenerators(false);
      setGeneratorOneClass("r0");
      setGeneratorTwoClass("r0");
    }, 2000);
  };

  const randDice = () => {
    setDiceValue1(random(0, 6));
    setDiceValue2(random(0, 6));
    setTimeout(() => setGeneratorOneClass("r" + diceValue1), 20);
    setTimeout(() => setGeneratorTwoClass("r" + diceValue2), 20);
  };

  const turn = () => {
    setIsGenerators(true);
    setTableActionVisible(false);
    randDice();
    setTimeout(() => {
      setPlayer1({
        userId: 1243457,
        mnplPosition: 1,
        mnplJailed: 0,
        mnplSamePos: 2
      });
    }, 2000);
    resetDice();
  };

  return (
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
                    text={
                      "Если вы откажетесь от покупки, то поле будет выставлено на общий аукцион."
                    }
                    actions={[{ title: `Бросить кубики`, onClick: turn }]}
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
              {isGenerators && (
                <Dices cl1={generatorOneClass} cl2={generatorTwoClass} />
              )}
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
};
