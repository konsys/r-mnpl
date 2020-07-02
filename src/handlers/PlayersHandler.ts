import { IPlayer } from "../types/types";
import { updateAllPlayers } from "../utils/players.utils";

export const playersHandler = (players: IPlayer[]) => updateAllPlayers(players);
