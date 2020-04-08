import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import "./style.scss";
import { Contract } from "../../components/views/Contract/Contract";
import { TableHelper } from "../../components/views/TableHelper/TableHelper";
import { Token } from "../../components/views/Token/Token";
import { Ticket } from "../../components/views/Ticket/ticket";
import { Arbitr } from "../../components/views/Arbitr/Arbitr";
import { M1tv } from "../../components/views/M1tv/M1tv";
import { BoardModal } from "../../components/views/BoardModal/BoardModal";
import { Dices } from "../../components/views/Dices/Dices";
import { GameLoading } from "../../components/views/GameLoading/GameLoading";
import { dicesStore } from "../../stores/DicesStore";
import { useStore } from "effector-react";
import openSocket from "socket.io-client";
import { BoardCore } from "../../components/core/BoardCore/BoardCore";
import { UsersCore } from "../PlayersCore/PlayersCore";
import { SocketActions } from "../../types/ActionsTypes";
import { userStore } from "../../stores/UserStore";
import {
  boardActionsStore,
  resetBoardActionEvent,
} from "../../stores/ActionStore";
import { BoardActionType } from "../../types/BoardTypes";
import { boardMessageHandler } from "../../handlers/SocketHandlers";
import { Chat } from "../../components/views/Chat/Chat";

export const mnplSocket = openSocket("http://localhost:3001");

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  const dicesState = useStore(dicesStore);
  const actionState = useStore(boardActionsStore);
  const userState = useStore(userStore);

  useEffect(() => {
    mnplSocket.on(SocketActions.BOARD_MESSAGE, boardMessageHandler);
    return () => resetBoardActionEvent();
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
                {userState.userId === actionState?.userId &&
                  actionState.action === BoardActionType.SHOW_MODAL && (
                    <BoardModal />
                  )}
                <Arbitr />
                <Ticket />
                <Chat />
              </div>
              <div className="table-body-board-tokens">
                <Token userId={userState.userId} />
              </div>
              {actionState?.action === BoardActionType.ROLL_DICES &&
                Array.isArray(dicesState.dices) &&
                dicesState.dices.length === 3 && (
                  <Dices
                    value1={dicesState.dices[0]}
                    value2={dicesState.dices[1]}
                    value3={dicesState.dices[2]}
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
