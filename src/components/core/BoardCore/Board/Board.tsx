import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

import { Arbitr } from "../../../views/BoardViews/Arbitr/Arbitr";
import { BoardCore } from "../../../../socket/BoardSocket";
import { BoardModal } from "../../../views/BoardViews/BoardModal/BoardModal";
import { Chat } from "../../../views/BoardViews/Chat/Chat";
import { Contract } from "../../../views/BoardViews/Contract/Contract";
import { Dices } from "../../../views/BoardViews/Dices/Dices";
import { GameLoading } from "../../../views/BoardViews/GameLoading/GameLoading";
import { M1tv } from "../../../views/BoardViews/M1tv/M1tv";
import { PlayersCore } from "../PlayersCore/PlayersCore";
import React from "react";
import { TableHelper } from "../../../views/BoardViews/TableHelper/TableHelper";
import { Ticket } from "../../../views/BoardViews/Ticket/ticket";
import { ToastContainer } from "react-toastify";
import { Tokens } from "../../../views/BoardViews/Tokens/Tokens";
import { actionsStore } from "../../../../stores/ActionStore";
import { useStore } from "effector-react";
import { userStore } from "../../../../stores/UserStore";

export const Board = () => {
  const action = useStore(actionsStore);
  const user = useStore(userStore);

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
                {user &&
                  action &&
                  user.userId === action.event.action.userId && (
                    <BoardModal
                      isModal={
                        (action.event.action && action.event.action.isModal) ||
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
