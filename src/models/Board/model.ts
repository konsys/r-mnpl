import { BoardDomain } from "../../stores/BoardDomain";
import { ferchGameAction } from "./api";

const GameActionDomain = BoardDomain.domain("ModalDomain");

export const rollDicesEffect = GameActionDomain.effect({
  handler: ferchGameAction,
});
