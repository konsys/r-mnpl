import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import "./style.scss";
import { Chat } from "../../components/Chat/Chat";
import { Contract } from "../../components/Contract/Contract";
import { TableHelper } from "../../components/TableHelper/TableHelper";
import { Token } from "../../components/Token/Token";
import { Ticket } from "../../components/Ticket/ticket";
import { Arbitr } from "../../components/Arbitr/Arbitr";
import { M1tv } from "../../components/M1tv/M1tv";
import { BoardModal } from "../../components/BoardModal/BoardModal";
import { Dices } from "../../components/Dices/Dices";
import { GameLoading } from "../../components/GameLoading/GameLoading";
import { dicesStore } from "../models/DicesStore";
import { useStore } from "effector-react";
import openSocket from "socket.io-client";
import { BoardCore } from "../BoardCore/BoardCore";
import { UsersCore } from "../PlayersCore/PlayersCore";
import { boardMessageHandler } from "./handlers/SocketHandlers";
import nanoid from "nanoid";
import { setBoardIdEvent, resetBoardEvent } from "../models/BoardStore";
import { SocketActions } from "../models/types/ActionsTypes";
import { boardModalStore } from "../models/BoardModalStore";

export const mnplSocket = openSocket("http://localhost:3001");

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  const dicesState = useStore(dicesStore);
  const modalState = useStore(boardModalStore);

  useEffect(() => {
    setBoardIdEvent(nanoid(12));
    mnplSocket.on(SocketActions.BOARD_MESSAGE, boardMessageHandler);
    return () => resetBoardEvent();
  }, []);

  return (
    <>
      <div className="wrapper" style={{ width: "100%", height: "100%" }}>
        <div className="table _shakehack">
          <div className="table-body">
            <UsersCore />
            <div className="table-body-board">
              <BoardCore />
              <div className="table-body-board-center">
                <M1tv />
                {modalState.isVisible && <BoardModal />}
                <Arbitr />
                <Ticket />
                <Chat />
              </div>
              <div className="table-body-board-tokens">
                <Token userId={1} />
              </div>
              {dicesState.isVisible && (
                <Dices
                  value1={dicesState.dice1}
                  value2={dicesState.dice2}
                  value3={dicesState.dice3}
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
