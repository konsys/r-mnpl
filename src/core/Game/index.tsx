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
import { dices, diceRandStandart, resetDices } from "./DicesStore";

import { useStore } from "effector-react";
import { calcPosition } from "./TokensStore";

export interface PlayerToken {
  position: number;
  isJailed: number;
}

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  const [isGenerators, setIsGenerators] = useState(false);
  const [tableActionVisible, setTableActionVisible] = useState(true);

  const diceStore = useStore(dices);

  const turn = () => {
    resetDices();
    setTableActionVisible(false);
    setIsGenerators(true);
    calcPosition();
    setTimeout(() => diceRandStandart());
    setTimeout(() => {
      setIsGenerators(false);
      setTableActionVisible(true);
    }, 1000);
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
                <Token id={1} />
              </div>
              {isGenerators && (
                <Dices
                  value1={diceStore.dice1}
                  value2={diceStore.dice2}
                  value3={diceStore.dice3}
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
