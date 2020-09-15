import { BoardDomain } from "../../stores/Board/BoardDomain";
import { IGameActionRequest } from "../../types/types";
import { fetchGameAction } from "./api";

const GameActionDomain = BoardDomain.domain("ModalDomain");

export const gameActionFx = GameActionDomain.effect<
  IGameActionRequest,
  Promise<any>,
  Error
>({
  handler: fetchGameAction,
});
