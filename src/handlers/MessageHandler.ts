import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";

import { fieldsHandler } from "./FieldsHandler";
import { playersHandler } from "./PlayersHandler";
import nanoid from "nanoid";

export const MessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  fieldsHandler(message.data.boardStatus.fields);
  playersHandler(message.data.boardStatus.players);

  console.log(23424234, event);
  setCurrentActionEvent({
    actionId: (event && event._id) || nanoid(4),
    event: message.data.event,
  });
};
