import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import "../../../../theme/styles/board/theme.scss";

import { players$, playersGate } from "stores/Board/PlayersStore";
import { useGate, useStore } from "effector-react";

import { Arbitr } from "../../../views/BoardViews/Arbitr/Arbitr";
import { BoardModal } from "../../../views/BoardViews/BoardModal/BoardModal";
import { BoardSocket } from "../../../../socket/BoardSocket";
import { Chat } from "../../../views/BoardViews/Chat/Chat";
import { Contract } from "../../../views/BoardViews/Contract/Contract";
import { Dices } from "../../../views/BoardViews/Dices/Dices";
import { IRoomState } from "stores/Game/Rooms/RoomsModel";
import { M1tv } from "../../../views/BoardViews/M1tv/M1tv";
import { PlayersCore } from "../PlayersCore/PlayersCore";
import React from "react";
import { TableHelper } from "../../../views/BoardViews/TableHelper/TableHelper";
import { Ticket } from "../../../views/BoardViews/Ticket/ticket";
import { ToastContainer } from "react-toastify";
import { Tokens } from "../../../views/BoardViews/Tokens/Tokens";
import { actionsStore } from "../../../../stores/Board/ActionStore";
import { user$ } from "stores/Game/User/UserModel";

export const BoardWrapper = ({ board }: { board: IRoomState }) => {
  const action = useStore(actionsStore);
  const user = useStore(user$);
  useGate(playersGate, { userIds: [1, 2], user: "me" });

  const players = useStore(players$);

  const modal = () => {
    try {
      return (
        user &&
        action &&
        user.userId === action.event.action.userId && (
          <BoardModal
            isModal={
              (action.event.action && action.event.action.isModal) || false
            }
          />
        )
      );
    } catch (err) {}
  };

  return (
    <>
      <div
        className="boardWrapper"
        style={{ width: "100%", height: "100%" }}
        mnpl-newcolors="1"
        cz-shortcut-listen="true"
        mnpl-mouse="1"
        data-os="null"
        data-browser="chrome"
      >
        <div className="table _shakehack">
          <div className="table-body">
            <PlayersCore players={players.players} />
            <div className="table-body-board">
              <BoardSocket />
              <div className="table-body-board-center">
                <M1tv />
                {modal()}
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

      <ToastContainer />
    </>
  );
};
