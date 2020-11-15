import { IBoardActionRequest, OutcomeMessageType } from "types/types";

export const testBoardActionRequest:IBoardActionRequest = {
    gameId:'testGameId',
    action:OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED
}