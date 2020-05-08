import { IPlayer } from "../types/BoardTypes";
import { updateAllPlayers } from "../utils/players.utils";

export const playersHandler = (players: IPlayer[]) => updateAllPlayers(players);
