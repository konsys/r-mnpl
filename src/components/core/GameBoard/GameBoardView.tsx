import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

import { Arbitr } from "../../views/Arbitr/Arbitr";
import { BoardCore } from "../BoardCore/BoardCore";
import { BoardModal } from "../../views/BoardModal/BoardModal";
import { Chat } from "../../views/Chat/Chat";
import { Contract } from "../../views/Contract/Contract";
import { Dices } from "../../views/Dices/Dices";
import { GameLoading } from "../../views/GameLoading/GameLoading";
import { M1tv } from "../../views/M1tv/M1tv";
import { PlayersCore } from "../PlayersCore/PlayersCore";
import React from "react";
import { TableHelper } from "../../views/TableHelper/TableHelper";
import { Ticket } from "../../views/Ticket/ticket";
import { ToastContainer } from "react-toastify";
import { Tokens } from "../../views/Tokens/Tokens";
import { actionsStore } from "../../../stores/ActionStore";
import { useStore } from "effector-react";

export const GameBoardView = () => {
  const actionState = useStore(actionsStore);

  return (
    <>
      <div className="wrapper" style={{ width: "100%", height: "100%" }}>
        <div className="table _shakehack">
          <div className="table-body">
            <PlayersCore />
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
