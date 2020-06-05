import React from "react";
import { RouteComponentProps } from "@reach/router";
import "./style.scss";
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
import { useStore } from "effector-react";
import { BoardCore } from "../BoardCore/BoardCore";
import { UsersCore } from "../PlayersCore/PlayersCore";
import { actionsStore } from "../../../stores/ActionStore";
import { IncomeMessageType } from "../../../types/BoardTypes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  const actionState = useStore(actionsStore);
  const actionType = actionState.event.action.type;

  const isModalAction =
    actionType === IncomeMessageType.INCOME_AUCTION_MODAL ||
    actionType === IncomeMessageType.INCOME_CAN_BUY_MODAL ||
    actionType === IncomeMessageType.INCOME_ROLL_DICES_MODAL ||
    actionType === IncomeMessageType.INCOME_TAX_PAYING_MODAL ||
    actionType === IncomeMessageType.INCOME_UN_JAIL_MODAL;

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
                  <BoardModal isModal={isModalAction} />
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
