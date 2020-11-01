import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import "../../../../theme/styles/board/theme.scss";

import { BoardMessage, FieldStatus, IPlayer } from "types/types";
import { InitBoardPlayersGate, players$ } from "stores/Board/PlayersStore";
import React, { useEffect } from "react";
import {
  actions$,
  setCurrentActionEvent,
} from "../../../../stores/Board/ActionStore";
import {
  fieldAction$,
  fields$,
  setFieldsEvent,
} from "stores/Board/FieldsStore";
import { useGate, useStore } from "effector-react";

import { Arbitr } from "../../../views/BoardViews/Arbitr/Arbitr";
import { BoardDomain } from "stores/Board/BoardDomain";
import { BoardModal } from "../../../views/BoardViews/BoardModal/BoardModal";
import { BoardSocketGate } from "stores/Board/SocketConnetcModel";
import { BoardView } from "components/views/BoardViews/Board/BoardView";
import { Chat } from "../../../views/BoardViews/Chat/Chat";
import { Contract } from "../../../views/BoardViews/Contract/Contract";
import { Dices } from "../../../views/BoardViews/Dices/Dices";
import { IRoomState } from "stores/Game/Rooms/RoomsModel";
import { M1tv } from "../../../views/BoardViews/M1tv/M1tv";
import { Players } from "components/views/BoardViews/Players/Players";
import { TableHelper } from "../../../views/BoardViews/TableHelper/TableHelper";
import { Ticket } from "../../../views/BoardViews/Ticket/Ticket";
import { ToastContainer } from "react-toastify";
import { Tokens } from "../../../views/BoardViews/Tokens/Tokens";
import { clearNode } from "effector";
import { contract$ } from "stores/Board/ContractStore";
import { isEqual } from "lodash";
import nanoid from "nanoid";
import { tokens$ } from "stores/Board/TokensStore";
import { updateAllPlayers } from "utils/players.utils";
import { user$ } from "stores/Game/User/UserModel";

export const fieldsHandler = (messageFieldsStatus: FieldStatus[]) => {
  allFieldsIterate(messageFieldsStatus);
};

// Not used
export const statusFieldsIterate = (messageFieldsStatus: FieldStatus[]) => {
  const store = fields$.getState();
  let toUpdateStore = false;

  messageFieldsStatus.forEach((status) => {
    const storeFieldIndex = store.fields.findIndex(
      (storeField) => storeField.fieldId === status.fieldId
    );

    const currentField = store.fields[storeFieldIndex];

    if (currentField && !isEqual(status, currentField.status)) {
      store.fields[storeFieldIndex] = {
        ...store.fields[storeFieldIndex],
        status,
      };
      toUpdateStore = true;
    }
  });

  toUpdateStore && setFieldsEvent({ ...store, version: ++store.version });
};

const allFieldsIterate = (messageFieldsStatus: FieldStatus[]) => {
  const store = fields$.getState();

  store.fields &&
    store.fields.forEach((storeField, index) => {
      const messageFieldStatus = messageFieldsStatus.find(
        (messageField) => messageField.fieldId === storeField.fieldId
      );

      if (messageFieldStatus) {
        store.fields[index] = {
          ...store.fields[index],
          status: messageFieldStatus,
        };
      } else {
        store.fields[index] = {
          ...store.fields[index],
          status: undefined,
        };
      }
    });
  setFieldsEvent({ ...store, version: ++store.version });
};

export const MessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  fieldsHandler(message.data.boardStatus.fields);
  playersHandler(message.data.boardStatus.players);

  setCurrentActionEvent({
    actionId: (event && event._id) || nanoid(4),
    event: message.data.event,
  });
};
export const playersHandler = (players: IPlayer[]) => updateAllPlayers(players);

export const BoardWrapper = ({ board }: { board: IRoomState }) => {
  const playerIds = board ? board.players.map((v) => (v ? v.userId : -1)) : [];

  useGate(InitBoardPlayersGate, { userIds: playerIds, user: "me" });
  useGate(BoardSocketGate, "");

  useEffect(() => {
    return () => {
      clearNode(BoardDomain, { deep: true });
    };
  }, []);

  const action = useStore(actions$);
  const playersData = useStore(players$);
  const { fields } = useStore(fields$);
  const fieldActionId = useStore(fieldAction$);
  const contract = useStore(contract$);
  const user = useStore(user$);
  const tokensData = useStore(tokens$);
  const tokens = tokensData && tokensData.tokens ? tokensData.tokens : [];

  const players =
    playersData && playersData.players && playersData.players.length
      ? playersData.players
      : null;

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
      {players &&
        players.length &&
        fields.length &&
        tokens.length &&
        user &&
        user.userId && (
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
                <Players players={players} user={user} action={action} />
                <div className="table-body-board">
                  <BoardView
                    fields={Array.isArray(fields) ? fields : []}
                    fieldActionId={fieldActionId}
                    contract={contract}
                    user={user}
                    players={players}
                  />

                  <div className="table-body-board-center">
                    <M1tv />
                    {modal()}
                    <Arbitr />
                    <Ticket />
                    <Chat />
                  </div>
                  <div className="table-body-board-tokens">
                    <Tokens tokens={tokens} fields={fields} />
                  </div>
                  <Dices />
                  <Contract user={user} contract={contract} />
                  <TableHelper />
                </div>
              </div>

              <div id="placeholder_gameover" />
            </div>
            <div className="table-jokes" />
          </div>
        )}

      <ToastContainer />
    </>
  );
};
