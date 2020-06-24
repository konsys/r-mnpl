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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FieldActions } from "../../views/FieldActions/FieldActions";
import { fieldsStore } from "../../../stores/FieldsStore";
import { IFieldModalPosition } from "../../../types/BoardTypes";

export const fieldsActionPosition = (): IFieldModalPosition => {
  return {
    left: 0,
    top: 0,
  };
};

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  const actionState = useStore(actionsStore);
  const { fields, version } = useStore(fieldsStore);
  return (
    <>
      <div className="wrapper" style={{ width: "100%", height: "100%" }}>
        <div className="table _shakehack">
          <div className="table-body">
            <UsersCore />
            <div className="table-body-board">
              <BoardCore fields={fields} version={version} />
              <div className="table-body-board-center">
                <M1tv />
                {actionState && (
                  // TODO check for user credentials
                  // userState.userId === actionState.event.action.userId &&
                  <BoardModal isModal={actionState.event.action.isModal} />
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
              {fields.map((v, k) => {
                return (
                  v.fieldGroup && (
                    <FieldActions
                      key={k}
                      fieldGroup={3}
                      name={"vk"}
                      groupName={"Веб-сервисы"}
                      price={{
                        branchPrice: v.price?.branchPrice || 0,
                        buyoutPrice: v.price?.buyoutPrice || 0,
                        pledgePrice: v.price?.pledgePrice || 0,
                        startPrice: v.price?.startPrice || 0,
                      }}
                      position={{ top: k * 15, left: k * 2 + 380 }}
                      rent={{
                        baseRent: v.rent?.baseRent || 0,
                        oneStar: v.rent?.oneStar || 0,
                        twoStar: v.rent?.twoStar || 0,
                        freeStar: v.rent?.freeStar || 0,
                        fourStar: v.rent?.fourStar || 0,
                        bigStar: v.rent?.bigStar || 0,
                      }}
                    />
                  )
                );
              })}
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
