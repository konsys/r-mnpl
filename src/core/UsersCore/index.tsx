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
import {
  dicesStore,
  resetDicesEvent,
  rollDicesEffect
} from "../GameCore/models/DicesStore";
import { useStore } from "effector-react";
import openSocket from "socket.io-client";
import {
  hideActionModalEvent,
  showActionModalEvent,
  visibilityStore,
  hideDicesEvent,
  showDicesEvent
} from "../GameCore/models/VisibilityStore";
import { BoardCore } from "../BoardCore/BoardCore";
import { UsersCore } from "../UsersCore/UsersCore";
import { boardMessageHandler } from "../GameCore/handlers/SocketHandlers";
import nanoid from "nanoid";
import {
  setBoardIdEvent,
  resetBoardEvent,
  boardStore
} from "../GameCore/models/BoardStore";
import { SocketActions } from "../GameCore/models/ActionsModel";

export const mnplSocket = openSocket("http://localhost:3001");

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  const dicesState = useStore(dicesStore);
  const visibilityState = useStore(visibilityStore);
  const boardState = useStore(boardStore);

  useEffect(() => {
    setBoardIdEvent(nanoid(12));
    mnplSocket.on(SocketActions.BOARD_MESSAGE, boardMessageHandler);
    return () => resetBoardEvent();
  }, []);

  const rollDices = async () => {
    resetDicesEvent();
    showDicesEvent();
    hideActionModalEvent();
    setTimeout(() => rollDicesEffect(boardState));
    setTimeout(() => {
      hideDicesEvent();
      showActionModalEvent();
    }, 2000);
  };

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
                {visibilityState.tableActionModal && <BoardModal />}
                <Arbitr />
                <Ticket />
                <Chat />
              </div>
              <div className="table-body-board-tokens">
                <Token userId={1} />
              </div>
              {visibilityState.dicesVisibility && (
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
