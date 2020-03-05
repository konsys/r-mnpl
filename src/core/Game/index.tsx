import React, { useState } from "react";
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
import { createStore, createEvent } from "effector";
import { useStore } from "effector-react";

export interface PlayerToken {
  position: number;
  isJailed: number;
}

interface Props extends RouteComponentProps {}

// const tokenOne = { userId: 1243457, mnplJailed: 0, mnplSamePos: 2 };
// let diceValue2 = 1;

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

const diceRandStandart = createEvent();
const diceRandPremium = createEvent();
const resetDices = createEvent();

const dices = createStore({
  dice1: 0,
  dice2: 0,
  dice3: 0
})
  .on(diceRandStandart, () => {
    return {
      dice1: random(0, 6),
      dice2: random(0, 6),
      dice3: 0
    };
  })
  .on(diceRandPremium, () => {
    return {
      dice1: random(0, 6),
      dice2: random(0, 6),
      dice3: random(0, 6)
    };
  })
  .reset(resetDices);

export const Game = (props: Props) => {
  const [isGenerators, setIsGenerators] = useState(false);
  const [tableActionVisible, setTableActionVisible] = useState(true);

  const [token1Position, setToken1Position] = useState(0);
  const [token2Position] = useState(0);

  const data = useStore(dices);

  const turn = () => {
    setIsGenerators(true);
    diceRandStandart();

    dices.watch(v => {
      const posSum = token1Position + v.dice1 + v.dice2;
      const pos1 = posSum > 40 ? posSum - 40 : posSum;
      setToken1Position(pos1);
    });
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
                <Token userId={1} position={token1Position} isJailed={0} />
                <Token userId={2} position={token2Position} isJailed={0} />
              </div>
              {isGenerators && (
                <Dices
                  value1={data.dice1}
                  value2={data.dice2}
                  value3={data.dice3}
                />
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
