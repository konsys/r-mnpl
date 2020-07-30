import { BoardMessage } from "../types/types";
import { fieldsHandler } from "./FieldsHandler";
import nanoid from "nanoid";
import { playersHandler } from "./PlayersHandler";
import { setCurrentActionEvent } from "../stores/ActionStore";

export const MessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  fieldsHandler(message.data.boardStatus.fields);
  playersHandler(message.data.boardStatus.players);

  setCurrentActionEvent({
    actionId: (event && event._id) || nanoid(4),
    event: message.data.event,
  });
};
