import React from "react";

import { Chat } from "../../views/Chat/Chat";
import { Contract } from "../../views/Contract/Contract";
import { TableHelper } from "../../views/TableHelper/TableHelper";
import { Tokens } from "../../views/Tokens/Tokens";
import { Ticket } from "../../views/Ticket/ticket";
import { Arbitr } from "../../views/Arbitr/Arbitr";
import { M1tv } from "../../views/M1tv/M1tv";
import { BoardModal } from "../../views/BoardModal/BoardModal";
import { Dices } from "../../views/Dices/Dices";
import { GameLoading } from "../../views/GameLoading/GameLoading";
import { BoardCore } from "../BoardCore/BoardCore";
import { UsersCore } from "../PlayersCore/PlayersCore";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useStore } from "effector-react";
import { actionsStore } from "../../../stores/ActionStore";

export const GameBoardView = () => {
  const actionState = useStore(actionsStore);

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
                {actionState && (
                  // TODO check for user credentials
                  // userState.userId === actionState.event.action.userId &&
                  <BoardModal
                    isModal={
                      (actionState.event.action &&
                        actionState.event.action.isModal) ||
                      false
                    }
                  />
                )}
                <Arbitr />
                <Ticket />
                <Chat />
              </div>
              <div className="table-body-board-tokens">
                <Tokens />
              </div>
              <Dices />
              <Contract />
              <TableHelper />
            </div>
          </div>

          <div id="placeholder_gameover"></div>
        </div>
        <div className="table-jokes"></div>
      </div>
      <GameLoading />
      <ToastContainer />
    </>
  );
};
