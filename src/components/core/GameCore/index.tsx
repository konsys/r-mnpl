import React from "react";
import { RouteComponentProps } from "@reach/router";
import "./style.scss";
import { Chat } from "../../views/Chat/Chat";
import { Contract } from "../../views/Contract/Contract";
import { TableHelper } from "../../views/TableHelper/TableHelper";
import { Token } from "../../views/Token/Token";
import { Ticket } from "../../views/Ticket/ticket";
import { Arbitr } from "../../views/Arbitr/Arbitr";
import { M1tv } from "../../views/M1tv/M1tv";
import { BoardModal } from "../../views/BoardModal/BoardModal";
import { Dices } from "../../views/Dices/Dices";
import { GameLoading } from "../../views/GameLoading/GameLoading";
import { useStore } from "effector-react";
import { BoardCore } from "../BoardCore/BoardCore";
import { UsersCore } from "../PlayersCore/PlayersCore";
import { userStore } from "../../../stores/UserStore";
import { actionsStore } from "../../../stores/ActionStore";
import { BoardActionType } from "../../../types/BoardTypes";
import { onTransitionEnd } from "../../../stores/TokensStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  const actionState = useStore(actionsStore);
  const userState = useStore(userStore);
  const isModal =
    actionState.event.action.type === BoardActionType.ROLL_DICES_MODAL ||
    actionState.event.action.type === BoardActionType.CAN_BUY;
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
                {actionState &&
                  userState.userId === actionState.event.action.userId &&
                  isModal && <BoardModal />}
                <Arbitr />
                <Ticket />
                <Chat />
              </div>
              <div className="table-body-board-tokens">
                <Token
                  userId={userState.userId}
                  onTransitionEnd={onTransitionEnd}
                />
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
