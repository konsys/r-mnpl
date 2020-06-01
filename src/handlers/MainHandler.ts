import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";

import { fieldsHandler } from "./FieldsHandler";
import { playersHandler } from "./PlayersHandler";

export const boardMessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  fieldsHandler(message.data.boardStatus.fields);
  playersHandler(message.data.boardStatus.players);

  setCurrentActionEvent({
    actionId: event._id,
    event: message.data.event,
  });
};
