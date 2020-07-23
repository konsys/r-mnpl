import { BoardDomain } from "../../stores/BoardDomain";
import { IFetchGameAction } from "../../types/types";
import { fetchGameAction } from "./api";

const GameActionDomain = BoardDomain.domain("ModalDomain");

export const rollDicesEffect = GameActionDomain.effect<
  IFetchGameAction,
  Promise<any>,
  Error
>({
  handler: fetchGameAction,
});
